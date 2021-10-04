import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryCasesAll } from '../model/summary-cases-all';
import { map } from 'rxjs/operators'
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class DdcService {

  constructor(private http: HttpClient) { }

  getTimelineCasesAll() : Observable<SummaryCasesAll[]>{
    return this.http.get<SummaryCasesAll[]>(Constants.SUMMARY_CASES_ALL_URL)
              .pipe(map(response=>{
                return response.reverse();
              }));
  }
}
