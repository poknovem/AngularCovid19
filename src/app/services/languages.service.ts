import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Constants } from '../constants/Constants';
import { ThLanguage } from '../model/impl/th_language';
import { ENLanguage } from '../model/impl/en_language';
import { Languages } from '../model/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  //languagesSubject = new Subject<Languages>();
  languagesSubject = new BehaviorSubject<Languages>(new ENLanguage()); 

  constructor() { }

  changeLanguages(language: string){
    //console.log(language);
    if(Constants.LANGUAGE_EN===language){
      let languages : Languages = new ENLanguage();
      this.languagesSubject.next(languages);
    }else if(Constants.LANGUAGE_TH===language){
      let languages : Languages = new ThLanguage();
      this.languagesSubject.next(languages);
    }
  }
}
