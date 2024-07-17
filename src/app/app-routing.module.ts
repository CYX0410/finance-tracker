import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'expense-tracker', loadChildren: () => import('./expense-tracker/expense-tracker.module').then(m => m.ExpenseTrackerPageModule) },
  {
    path: 'add-transaction',
    loadChildren: () => import('./add-transaction/add-transaction.module').then( m => m.AddTransactionPageModule)
  },
  {
    path: 'edit-transaction/:id',
    loadChildren: () => import('./edit-transaction/edit-transaction.module').then( m => m.EditTransactionPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'expense-chart',
    loadChildren: () => import('./expense-chart/expense-chart.module').then( m => m.ExpenseChartPageModule)
  },
  {
    path: 'currency-calculator',
    loadChildren: () => import('./currency-calculator/currency-calculator.module').then( m => m.CurrencyCalculatorPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
