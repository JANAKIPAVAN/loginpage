import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("18104647105-dltv18k1535piofqd33dmug1i60rjlh4.apps.googleusercontent.com")
      },
    ]
);
return config;
}

@NgModule({
  declarations:[ AppComponent
  ],
  imports: [
  BrowserModule,
  SocialLoginModule
],
providers: [
  {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
],
bootstrap: [AppComponent]
})

export class AppModule { }
