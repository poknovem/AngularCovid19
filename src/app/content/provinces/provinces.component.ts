import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Languages } from 'src/app/model/languages';
import { ProvincesCasesAll } from 'src/app/model/provinces-cases-all';
import { DdcService } from 'src/app/services/ddc.service';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit, OnDestroy {

  provincesCasesAll : ProvincesCasesAll[] = [];
  languages! : Languages;
  languagesSubScription!: Subscription;
  

  constructor(private ddcService: DdcService, private languagesService: LanguagesService) { }

  ngOnDestroy(): void {
    this.languagesSubScription.unsubscribe;
  }

  ngOnInit(): void {
    this.ddcService.getProvincesCasesAll().subscribe(response=>{
      //console.log(response);
      this.provincesCasesAll = response;
    });

    this.languagesSubScription = this.languagesService.languagesSubject.subscribe(subject=>{
      this.languages = subject;
    });
  }

}
