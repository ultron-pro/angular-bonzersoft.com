import { Component, OnInit } from '@angular/core';
import {faYoutube,faFacebook,faTwitter,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

       faYoutbue =faYoutube;
       faFacebook=faFacebook;
       faTwitter=faTwitter;
       faGithub=faGithub;
       faInstagram=faInstagram;
  ngOnInit(): void {
      
  }
}
