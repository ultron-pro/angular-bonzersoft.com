import { ContentObserver } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas],

})
export class HeaderComponent {
  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
		content :"hello";
	}

	open(content:any) {
		this.offcanvasService.open(content);
		console.warn(content);
	}
}
