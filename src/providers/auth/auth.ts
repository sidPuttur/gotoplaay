import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthProvider {

  constructor(private afa:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }


  //returns User login state
  isLoggedIn(){

    return this.afa.authState

  }

  //Login user with email and password (old school)
  loginUserWithEmail(userdata){

   return this.afa.auth.signInWithEmailAndPassword(userdata.email,userdata.password)

  }

  //Register a new User with email and password (old school)
  registerUserWithEmail(userdata){
    return this.afa.auth.createUserWithEmailAndPassword(userdata.email,userdata.password)
  }

}
