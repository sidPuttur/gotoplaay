import { Injectable } from '@angular/core';
import { EventItem, MatchCategory,MatchType, TournamentCatory,AgeCategory } from '../../models/event-item/event-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import moment from 'moment';


@Injectable()
export class EventsProvider {

  eventListRef$:any;
  createEvents:any = {
    generalInfo:{},
    contactDetails:[],
    trophyDetails:{},
    matchCategory:[],
    terms:[]
  }
  constructor(public afd:AngularFireDatabase) {  
  }

  //return the list of events;
   getEventListRef(){
      return this.afd.list<EventItem[]>('Event-List'); 
   }

   //return the list of match Category
   getMatchCategoryRef(){
      return this.afd.list<MatchCategory[]>('matchCategory');
   }

   //return the list of match type
   getMatchTypeRef(){
      return this.afd.list<MatchType[]>('matchType');
   }

   //return the list of tournament Type or Event Type
   getEventTypeRef(){
     return this.afd.list<TournamentCatory[]>('tourneyCategory');
   }

   //returns AgeCategoryList
   getAgeCategoryList(){
     return this.afd.list<AgeCategory[]>('ageCategory');
   }

   


}
