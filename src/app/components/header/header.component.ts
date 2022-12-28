
import { ContentObserver } from '@angular/cdk/observers';
import { Component,HostListener } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {faCircleDown} from '@fortawesome/free-regular-svg-icons';
import {faHome,faContactCard,faSearch,faAddressCard} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas],

})
export class HeaderComponent {

	isSticky: boolean = false;

	@HostListener('window:scroll', ['$event'])
	checkScroll() {
	  this.isSticky = window.pageYOffset >= 250;
	}


	// font icon
	faCircleDown=faCircleDown;
	faHome=faHome;
	faContactCard=faContactCard;
	faSearch=faSearch;
	  
	//end font icon
	navbarCollapsed = true

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

