import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ChatComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PickerModule,
    BrowserAnimationsModule,
    NgbModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
