import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebtoonRoutingModule } from './webtoon-routing.module';
import { WebtoonFormComponent } from './webtoon-form/webtoon-form.component';
import { FormsModule } from '@angular/forms';
import { WebtoonListComponent } from './webtoon-list/webtoon-list.component';


@NgModule({
  declarations: [WebtoonFormComponent, WebtoonListComponent],
  imports: [
    CommonModule,
    WebtoonRoutingModule,
    FormsModule
  ],
  exports: [
    WebtoonFormComponent,
    WebtoonListComponent
  ]
})
export class WebtoonModule { }
