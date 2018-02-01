import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  eventListRef$:any;
  eventList:any = [];
  _today = moment();
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventsProvider:EventsProvider) {

   
    this.getEventList();
    
  }

 
   getEventList(){
      let eventListRef$ = this.eventsProvider.getEventListRef();
      eventListRef$.valueChanges().subscribe(eventData=>{
        this.eventList = eventData;
      })

      eventListRef$.snapshotChanges().subscribe(snap=>{
        console.log(snap, 'snap changes');
      });
  }

  gotoEventDetails(eventdata){
    this.navCtrl.push('EventdetailsPage', {edata:eventdata})
  }

  checkEventDate(date){
    let newdate = moment(date);
    return newdate.isSameOrAfter(this._today)?true:false;    
  }

  

}
