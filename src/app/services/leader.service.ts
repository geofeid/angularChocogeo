import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Leader } from '../shared/leader';






  @Injectable()
export class LeaderService {
 constructor(private http: HttpClient) { }
 getLeaders(): Observable<Leader[]> {
 return this.http.get<Leader[]>(baseURL + 'leaders');
 }
 getDish(id: number): Observable<Leader> {
 return this.http.get<Leader>(baseURL + 'leaders/' + id);
 }
}
   


