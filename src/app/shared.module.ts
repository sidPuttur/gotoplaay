import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderComponent } from '../components/header/header';

@NgModule({
    imports:[
        IonicPageModule.forChild(HeaderComponent)
    ],
    declarations:[HeaderComponent],
    exports:[HeaderComponent]
})
export class SharedModule { }