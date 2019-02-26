import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resume';

  constructor(private translate: TranslateService) {}

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
