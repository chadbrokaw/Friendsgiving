import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { EmitMyNameService } from '../emit-my-name.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  challengeText: string;
  smallScreen: boolean = false;
  conner: boolean = false;
  chad: boolean = false;
  kyle: boolean = false;
  pranathi: boolean = false;
  simon: boolean = false;
  mason: boolean = false;
  david: boolean = false;


  acceptedNames: any = ['kyle', 'pranathi', 'conner', 'chad', 'simon', 'mason', 'david'];

  constructor( private router: Router, private emit: EmitMyNameService) { }

  ngOnInit() {
    if ( window.innerWidth < 755 ) {
      this.smallScreen = true;
    }
    else {
      this.smallScreen = false;
    }
  }

  @HostListener( 'window:resize', ['$event'] )
  onResize( event ): void {
    if ( window.innerWidth < 755 ) {
      this.smallScreen = true;
    }
    else {
      this.smallScreen = false;
    }
  }

  buttonPressed(nameValue: string): void {
    let passedNameTest = false;
    let passedChallengeTest = false;

    nameValue = nameValue.toLowerCase().trim();

    if ( this.acceptedNames.indexOf(nameValue) !== -1 ) {
      passedNameTest = true;
    }

    if ( this.chad && this.kyle ) {
      passedChallengeTest = true;
    }

    if ( passedNameTest && passedChallengeTest ) {
      this.router.navigate(['/Details', nameValue]);
      this.emit.emitComponentName( nameValue );
    }
  }
}
