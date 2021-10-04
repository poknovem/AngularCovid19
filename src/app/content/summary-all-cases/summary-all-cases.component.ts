import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Languages } from 'src/app/model/languages';
import { SummaryCasesAll } from 'src/app/model/summary-cases-all';
import { LanguagesService } from 'src/app/services/languages.service';
import { DdcService } from '../../services/ddc.service';

@Component({
  selector: 'app-summary-all-cases',
  templateUrl: './summary-all-cases.component.html',
  styleUrls: ['./summary-all-cases.component.css']
})
export class SummaryAllCasesComponent implements OnInit, OnDestroy {
  summaryCasesAll : SummaryCasesAll[] = [];
  languages!: Languages;
  languagesSubscription! : Subscription;

  constructor(private ddcService : DdcService, private languagesService: LanguagesService) { }

  ngOnDestroy(): void {
    this.languagesSubscription.unsubscribe;
  }

  ngOnInit(): void {
    this.ddcService.getTimelineCasesAll().subscribe(response =>{
      //console.log(response[0].txn_date);
      this.summaryCasesAll = response;
    });

    this.languagesSubscription = this.languagesService.languagesSubject.subscribe(languagesSubject=>{
      this.languages = languagesSubject;
    });

  }

}
