import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { todoReducer } from './app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { trash,facebook,dribbble,twitter,linkedin } from 'ngx-bootstrap-icons';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { GitProfileViewerComponent } from './git-profile-viewer/git-profile-viewer.component';

// Select some icons (use an object, not an array)
const icons = {
  trash,
  facebook,dribbble,twitter,linkedin
};
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    GitProfileViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
