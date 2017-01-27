import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TournamentsPage } from '../pages/pages';
import { MyTeamsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    TournamentsPage,
    MyTeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TournamentsPage,
    MyTeamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
