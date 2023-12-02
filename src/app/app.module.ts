import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angularfire-d6998","appId":"1:815137832818:web:2568f85f147d778c0567eb","storageBucket":"angularfire-d6998.appspot.com","apiKey":"AIzaSyCSWd1UTSa2RIs1ozPNHexanSoRXICucr0","authDomain":"angularfire-d6998.firebaseapp.com","messagingSenderId":"815137832818","measurementId":"G-ZYB82MFVT2"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
