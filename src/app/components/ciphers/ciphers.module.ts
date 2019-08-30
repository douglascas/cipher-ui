import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CiphersComponent } from './ciphers.component';
import { PlayfairComponent } from './playfair/playfair/playfair.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [CiphersComponent],
  declarations: [CiphersComponent, PlayfairComponent],
  providers: [],
})
export class CiphersModule { }
