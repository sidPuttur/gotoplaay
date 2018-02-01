import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventdetailsPage } from './eventdetails';
import { SharedModule } from '../../app/shared.module';


@NgModule({
  declarations: [
    EventdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventdetailsPage),
    SharedModule
  ],
})
export class EventdetailsPageModule {}
