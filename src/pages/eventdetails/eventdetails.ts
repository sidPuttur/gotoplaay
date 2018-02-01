import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-eventdetails',
  templateUrl: 'eventdetails.html',
})
export class EventdetailsPage {

  _eventData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._eventData = this.navParams.get('edata');
    console.log(this._eventData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailsPage');
  }

  

}
