import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Feedback } from '../shared/feedback';


@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) {}

    getFeedbacks(): Observable<Feedback[]> {
      return this.http.get<Feedback[]>(baseURL + 'feedback');
   

}
}
