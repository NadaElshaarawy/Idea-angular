import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIModule } from '@app/ui.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthService } from '@app/services/auth.service';
import { ApiService } from '@app/services/api.service';
import { UUIDGuard } from '@app/services/uuid.guard';
import { AppComponent } from '@app/app.component';
import { AuthComponent } from '@app/components/auth/auth.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { UserModule } from './features/user/user.module';
import { IdeaModule } from './features/idea/idea.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UIModule,
    UserModule,
    IdeaModule
  ],
  providers: [AuthService, ApiService, UUIDGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}