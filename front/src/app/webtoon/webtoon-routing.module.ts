import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebtoonFormComponent } from './webtoon-form/webtoon-form.component';
import { WebtoonListComponent } from './webtoon-list/webtoon-list.component';

const routes: Routes = [
  { path: 'webtoon-form', component: WebtoonFormComponent },
  { path: 'webtoon-form/:id', component: WebtoonFormComponent },
  { path: 'webtoon-list', component: WebtoonListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebtoonRoutingModule { }
