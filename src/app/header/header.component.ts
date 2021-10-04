import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { Languages } from 'src/app/model/languages';
import { Constants } from '../constants/Constants';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  languages! : Languages;
  languagesSubscription! : Subscription;
  

  constructor(private languagesService: LanguagesService) { }

  ngOnDestroy(): void {
    this.languagesSubscription.unsubscribe;
  }

  ngOnInit(): void {
    this.languagesSubscription = this.languagesService.languagesSubject.subscribe(subject=>{
      this.languages = subject;
    });
  }

  changeLanguages(languages : string){
    //console.log(languages);
    this.languagesService.changeLanguages(languages);
  }

  get staticTHLanguage() {
    return Constants.LANGUAGE_TH;
  }

  get staticENLanguage() {
    return Constants.LANGUAGE_EN;
  }

}
