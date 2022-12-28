import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
//ripple
centered = false;
disabled = false;
unbounded = false;
radius: 2;
color: string = '#e6f2ff';
}
