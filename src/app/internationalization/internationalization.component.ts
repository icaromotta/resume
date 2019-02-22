import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.scss']
})
export class InternationalizationComponent implements OnInit {

  public flagBrasil = '/assets/icons8-brasil-48.png';
  public flagEua = '/assets/icons8-eua-48.png';
  public flagEspana = '/assets/icons8-espanha-48.png';

  constructor() { }

  ngOnInit() {
  }

}
