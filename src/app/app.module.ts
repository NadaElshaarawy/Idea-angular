import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthService } from '@app/services/auth.service';
import { ApiService } from '@app/services/api.service';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthComponent } from '@app/components/auth/auth.component';
import {UIModule} from './ui.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component'
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [ 
    AppComponent, AuthComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
