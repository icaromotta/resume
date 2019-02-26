import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.scss']
})
export class InternationalizationComponent implements OnInit {

  public flagBrasil = '/assets/icons8-brasil-48.png';
  public flagEua = '/assets/icons8-eua-48.png';
  public flagEspana = '/assets/icons8-espanha-48.png';

  constructor(private translate: TranslateService) { }

  public ngOnInit(): void {
    this.setDefaultTranslation();
  }

  private setDefaultTranslation(): void {
    if (['en', 'es', 'fr'].indexOf(this.translate.getBrowserLang()) > -1) {
      this.translate.setDefaultLang(this.translate.getBrowserLang());
    }
  }

  public switchLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }


}
