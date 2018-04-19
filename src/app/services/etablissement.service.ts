
import { Injectable } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs' ;
import { etablis } from '../etablis';
import { retry } from 'rxjs/operator/retry';
@Injectable()
export class EtablissementService {

  EtaFiliere: FirebaseListObservable<any[]>;
  Etablissement: FirebaseListObservable<any[]>;
  Filiere: FirebaseListObservable<any>;
  etablis: FirebaseObjectObservable<any>;


  constructor(public af: AngularFireDatabase) {
    this.EtaFiliere = this.af.list('/EtaFiliere') as FirebaseListObservable<etablis[]>;
    this.Etablissement = this.af.list('/Etablissement') as FirebaseListObservable<etablis[]>;
    this.Filiere = this.af.list('/Filiere') as FirebaseListObservable<etablis[]>;
   }
  getetablissement()
  {
    return  this.Etablissement ;
  }
  getetaFiliere()
  {
    return this.EtaFiliere ;
  }
  getfiliere()
  {
    return this.Filiere;
  }
}
