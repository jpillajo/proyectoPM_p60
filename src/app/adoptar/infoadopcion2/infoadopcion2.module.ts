import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Infoadopcion2PageRoutingModule } from './infoadopcion2-routing.module';

import { Infoadopcion2Page } from './infoadopcion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Infoadopcion2PageRoutingModule
  ],
  declarations: [Infoadopcion2Page]
})
export class Infoadopcion2PageModule {}
