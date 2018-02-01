import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  _userDetails:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){

    this.authProvider.registerUserWithEmail(this._userDetails).then(authdata=>{

      
      this.navCtrl.setRoot('TabsPage');

    }).catch(err=>{
      console.log(err,"error in creating new user")
    })

  }

}
