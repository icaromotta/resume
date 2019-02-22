import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';

  languages = [
    { code: 'fr', label: 'Français'}
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) {}

  public chooseLang(lang) {
    console.log(this.localeId);
    this.localeId = lang;
    console.log(this.localeId);
  }

}
