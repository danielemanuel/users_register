import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import  { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {FilterPipe} from './pipes/pipe.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
