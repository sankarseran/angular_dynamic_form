import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// c
import { TakeTestComponent } from './take-test/take-test.component';
import { TestResultComponent } from './test-result/test-result.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TakeTestComponent },
  { path: 'result', component: TestResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
