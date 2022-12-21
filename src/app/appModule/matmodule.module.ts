import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { NgbDropdown, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

const material =[

    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbCarousel,
    
]
@NgModule({
  declarations: [],
 
  imports: [
    CommonModule,
    material,
  
    
  ],

  exports:[

    material
  
  ]
})
export class MatmoduleModule { }
