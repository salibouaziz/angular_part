


import {firebaseConfig} from './environment';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService, APP_NAME, APP_VERSION } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  imports: [
    // firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: APP_NAME, useValue: '' },
    { provide: APP_VERSION, useValue: '0.1.0' }
  ],
})
export class FirebaseModule {
}
  