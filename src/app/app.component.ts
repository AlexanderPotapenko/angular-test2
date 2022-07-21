import { Component, Input } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'frontend-test'
  lang:string;
  SetLanguage(lang:string){
    this.lang = lang
    this.translate.use(this.lang);
  }

  constructor(private translate: TranslateService)  { 
    this.lang = 'en'
    this.translate.setDefaultLang('en');    
    this.translate.use(this.lang);
   }

}
