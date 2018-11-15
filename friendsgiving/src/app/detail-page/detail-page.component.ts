import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  participantName: string;
  checked: boolean = false;

  constructor( private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const lowercaseParticipant: string = params['person'];
      this.participantName = this.capitalizeFirstLetter(lowercaseParticipant);
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  rsvpPressed() {
    this.router.navigate(['/RSVP', this.participantName]);
  }
}
