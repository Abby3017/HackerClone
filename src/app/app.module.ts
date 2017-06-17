import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import {HackerNewsAPIService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  HttpModule],
  declarations: [ AppComponent,
  HeaderComponent,
  StoriesComponent,
  ItemComponent,DomainPipe],
  providers: [HackerNewsAPIService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
