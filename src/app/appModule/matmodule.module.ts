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
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper'; 
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";










const material =[

  
  ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    NgbDropdown,
    MatProgressBarModule,
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
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    material
  
  ]
})
export class MatmoduleModule { }
