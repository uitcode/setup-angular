import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'test',
      loadChildren: () => import('@page/test/test.module').then(m => m.TestModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
