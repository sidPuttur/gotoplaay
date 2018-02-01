import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';



@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  eventTypeList:any = [];
  matchCategoryList:any = [];
  matchTypeList:any = [];
  ageCategoryList:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventsProvider:EventsProvider) {

                this.getEventTypeList();
                this.getMatchCategoryList();
                this.getMatchTypeList();
                this.getAgeCategoryList();
  }



  getEventTypeList(){
    let eventTypeRef = this.eventsProvider.getEventTypeRef();
    eventTypeRef.valueChanges().subscribe(data=>{
      this.eventTypeList = data;
    })
  }

  getMatchCategoryList(){
    let matchCategoryTypeRef =  this.eventsProvider.getMatchCategoryRef();
    matchCategoryTypeRef.valueChanges().subscribe(data=>{
      this.matchCategoryList = data;
    })
  }

  getMatchTypeList(){
    let matchTypeRef = this.eventsProvider.getMatchTypeRef();
    matchTypeRef.valueChanges().subscribe(data=>{
      this.matchTypeList = data;
    })
  }

  getAgeCategoryList(){
    let ageCategoryRef =  this.eventsProvider.getAgeCategoryList();
    ageCategoryRef.valueChanges().subscribe(data=>{
      this.ageCategoryList = data;
    })
  }


  createNewEvent(){
  }

}
