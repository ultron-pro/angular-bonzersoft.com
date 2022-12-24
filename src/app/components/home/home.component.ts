import { Component,OnInit,ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgbAccordionModule, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

         


@Component({
  selector: 'app-home',
  standalone: true,
	imports: [NgbCarouselModule, NgIf,NgbAccordionModule],
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles: [`
  .carouselImage { 
	width:100%;
	

}
  ::ng-deep .container-fluid { padding:0 !important; }
`]
  
})
export class HomeComponent implements OnInit {
	   constructor(){

     }
     ngOnInit(): void {
         
     }
	 public beforeChange($event: NgbPanelChangeEvent) {
		
		// if ($event.panelId === 'preventchange-2') {
		// 	$event.preventDefault();
		// }

		// if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
		// 	$event.preventDefault();
		// }
	}
	// images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
    //images=['../../assets/image/banner1.jpg','../../assets/image/banner2.jpg']
	// paused = false;
	// unpauseOnArrow = false;
	// pauseOnIndicator = false;
	// pauseOnHover = true;
	// pauseOnFocus = true;

	// @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	// togglePaused() {
	// 	if (this.paused) {
	// 		this.carousel.cycle();
	// 	} else {
	// 		this.carousel.pause();
	// 	}
	// 	this.paused = !this.paused;
	// }

	// onSlide(slideEvent: NgbSlideEvent) {
	// 	if (
	// 		this.unpauseOnArrow &&
	// 		slideEvent.paused &&
	// 		(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
	// 	) {
	// 		this.togglePaused();
	// 	}
	// 	if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
	// 		this.togglePaused();
	// 	}
	// }
	//images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	//images = [62, 83, 466, 965, 982, 1043, 738].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    images=['../../assets/image/img1.jpg','../../assets/image/img2.jpg','../../assets/image/img3.jpg','../../assets/image/img4.jpg']
	//src\assets\image\

}