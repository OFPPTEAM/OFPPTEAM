import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ForumComponent } from './forum/forum.component';
import { DemandeComponent } from './demande/demande.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ModUleComponent } from './mod-ule/mod-ule.component';
import { Mod1Component } from './cours/mod1/mod1.component';
import { ContactComponent } from './contact/contact.component';
import { StatutComponent } from './statut/statut.component';
import { AttestationComponent } from './attestation/attestation.component';
import { BadgeComponent } from './badge/badge.component';
import { EspaceetaComponent } from './espaceeta/espaceeta.component';
import { EspacedepComponent } from './espacedep/espacedep.component';
import { EspacegerComponent } from './espaceger/espaceger.component';
import { ConfirmeComponent } from './Validation/confirme/confirme.component';
import { Etap1Component } from './etapes/etap1/etap1.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'group', component: GroupComponent
  },
  {
    path: 'demande', component: DemandeComponent
  },
  {
    path: 'forum', component: ForumComponent, children: [
      {
        path: '', redirectTo: '/forum/filiere', pathMatch: 'full'
      },
      {
        path: 'filiere', component: FiliereComponent , children: []
      },
      {
            path: 'statut', component: StatutComponent
      },
      {
        path: 'modUle', component: ModUleComponent, children: [
          {
            path: 'mod1', component: Mod1Component
          }
        ]
      }
    ]
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'attestation', component: AttestationComponent
  },
  {
    path: 'badge', component: BadgeComponent
  },
  {
    path: 'espacedep', component: EspacedepComponent
  },
  {
    path: 'espaceeta', component: EspaceetaComponent
  },
  {
    path: 'espaceger', component: EspacegerComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupComponent,
    ForumComponent,
    DemandeComponent,
    FiliereComponent,
    ContactComponent,
    ModUleComponent,
    Mod1Component,
    StatutComponent,
    AttestationComponent,
    BadgeComponent,
    EspaceetaComponent,
    EspacedepComponent,
    EspacegerComponent,
    ConfirmeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
