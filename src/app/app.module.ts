import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    PresentationComponent,
    InternationalizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
