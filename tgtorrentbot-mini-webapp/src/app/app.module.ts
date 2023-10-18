import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TorrentsListItemComponent } from './controls/torrents-list-item/torrents-list-item.component';
import { BytesToHumanReadablePipe } from './utility/bytes-to-human-readable.pipe';
import { StoreModule } from '@ngrx/store';
import { mainPageReducer } from '../store/main-page.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


const environment = {
  production: false,
};

export const storeDevTools: ModuleWithProviders<any>[] = 
    !environment.production ? [StoreDevtoolsModule.instrument()] : [];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TorrentsListItemComponent,
    BytesToHumanReadablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ mainPage: mainPageReducer }, {}),
    storeDevTools
  ],
  providers: [
    { provide: 'Window', useValue: window },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
