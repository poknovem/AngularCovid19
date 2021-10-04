import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/model/languages';
import { SummaryCasesAll } from 'src/app/model/summary-cases-all';
import { LanguagesService } from 'src/app/services/languages.service';
import { DdcService } from '../../services/ddc.service';

@Component({
  selector: 'app-summary-all-cases',
  templateUrl: './summary-all-cases.component.html',
  styleUrls: ['./summary-all-cases.component.css']
})
export class SummaryAllCasesComponent implements OnInit {
  summaryCasesAll : SummaryCasesAll[] = [];
  languages!: Languages;

  constructor(private ddcService : DdcService, private languagesService: LanguagesService) { }

  ngOnInit(): void {
    this.ddcService.getTimelineCasesAll().subscribe(response =>{
      //console.log(response[0].txn_date);
      this.summaryCasesAll = response;
    });

    this.languagesService.languagesSubject.subscribe(languagesSubject=>{
      this.languages = languagesSubject;
    });

  }

}
