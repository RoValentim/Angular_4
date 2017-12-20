import { Injectable } from '@angular/core';

import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeaderService {

        constructor() {
                // constructor( private http: Http, private processHTTPMsgService: ProcessHTTPMsgService ) {
        }

        getLeaders(): Observable<Leader[]> {
                return Observable.of(LEADERS).delay(2000);
        }

        getLeader( id: number ): Observable<Leader> {
                return Observable.of(LEADERS.filter( (leader)=>(leader.id === id) )[0]).delay(2000);
        }

        getFeaturedLeader(): Observable<Leader> {
                return Observable.of(LEADERS.filter( (leader)=>(leader.featured) )[0]).delay(2000);
        }
}
