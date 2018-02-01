import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  _userDetails:any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams,private authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){

    this.authProvider.loginUserWithEmail(this._userDetails).then(authdata=>{
      
      this.navCtrl.setRoot('TabsPage')

    }).catch(err=>{
      console.log(err,"error in authentication");
    })
  }

}
