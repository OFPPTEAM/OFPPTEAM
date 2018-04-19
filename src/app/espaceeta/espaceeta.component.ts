import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../services/etablissement.service';
import { etablis } from '../etablis';
@Component({
  selector: 'app-espaceeta',
  templateUrl: './espaceeta.component.html',
  styleUrls: ['./espaceeta.component.css']
})
export class EspaceetaComponent implements OnInit {

  etafilier: etablis[];
  constructor( public  etabliservice: EtablissementService) {

  }

  ngOnInit() {
    this.etabliservice.getetablissement().subscribe(etafilier => {
      this.etafilier = etafilier;
    // this.etabliservice.getetaFiliere().subscribe(etafilier => {
    //     this.etafilier = etafilier;
    // this.etabliservice.getfiliere().subscribe(etafilier => {
    //       this.etafilier = etafilier;
      console.log(this.etafilier);
    });
  }

}
