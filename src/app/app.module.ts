import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
const appRoutes:Routes =[
  {path:'',component: LandingComponent},
  {path:'theatre',component: TheatreComponent}
   ]


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    RegisterComponent,
    TheatreComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
