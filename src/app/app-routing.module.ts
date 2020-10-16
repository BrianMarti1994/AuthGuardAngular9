import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {HomeComponent}from '../app/home/home.component';
import{TransactionComponent}from '../app/transaction/transaction.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'Home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'Transaction', component: TransactionComponent,canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
