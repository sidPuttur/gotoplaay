import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import * as firebase from 'firebase/app';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;


  pages:Array<{title: string, component: any, icon: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public authProvider:AuthProvider) {
    platform.ready().then(() => {
      this.pages = [
        { title:'Events', component:'TabsPage', icon:'clock'},
        { title:'Create Event', component:'CreateEventPage', icon:'clock'}
      ]
 
     this.authProvider.isLoggedIn().subscribe((user: firebase.User)=>{
          this.rootPage = user?"TabsPage":"WelcomePage";
     })
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
  openPage(page:any){

    this.nav.setRoot(page.component);
  }
}
