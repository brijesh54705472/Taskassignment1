import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { PayloadsComponent } from './payloads/payloads.component';


const routes: Routes = [
  {path:'',redirectTo:'history',pathMatch:'full'},
  {path:'history',component:HistoryComponent},
  {path:'payloads', component:PayloadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
