import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public avatar = '../../assets/me.png';
  public imgCafe =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/Fw1D-icons8-caf%C3%A9-64.png";
  public imgCerveja =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/a391-icons8-cerveja-64.png";
  public imgCiclismo =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/T4pb-icons8-ciclismo-de-estrada-64.png";
  public imgControle =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/Oukl-icons8-controle-64.png";
  public imgMusical =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/jzFg-icons8-musical-64.png";
  public imgPraia =
    "https://uploads.codesandbox.io/uploads/user/c6f9e663-ed30-4be5-9a29-cc609a2d653a/Ss6P-icons8-praia-64.png";


  constructor() { }

  ngOnInit() {
  }

}
