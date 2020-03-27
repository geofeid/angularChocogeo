import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Dish } from '../shared/dish';



@Injectable()
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
    }

    getDish(id: number): Observable<Dish> {
      return this.http.get<Dish>(baseURL + 'dishes/' + id);
      }
}
