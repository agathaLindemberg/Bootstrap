import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { WebtoonModule } from './webtoon/webtoon.module';
import { WebtoonService } from './services/webtoon.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    WebtoonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebtoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
