import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {
  participantName: string = undefined;
  specificParticipantDetails: any = undefined;
  needsIngredients: boolean = false;
  emptyString: string = "";

  participantDetails: any = {
    Simon: {
      food: "Salad, Corn, and alcohol",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    Pranathi: {
      food: "Pie (either Apple, Pumpkin, or both)",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    Conner: {
      food: "Alcohol, Mashed Potatoes, and Gravy",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    Chad: {
      food: "Pie (either Apple, Pumpkin, or both) and Cranberry Sauce",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    Kyle: {
      food: "Stuffing",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    Mason: {
      food: "Brussel Sprouts with Bacon and Cornish Game Hens",
      wine: undefined,
      ingredientsNeeded: undefined
    },
    David: {
      food: "Brussel Sprouts with Bacon and Cornish Game Hens",
      wine: undefined,
      ingredientsNeeded: undefined
    }
  };

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const lowercaseParticipant: string = params['person'];
      this.participantName = this.capitalizeFirstLetter(lowercaseParticipant);
      this.specificParticipantDetails = this.participantDetails[this.participantName];
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
