import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/interface/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

@Input() pet: Pet;
maxExp = 400;

  constructor() { }

  ngOnInit() {
  }
    getExpPercentage(): number {
      return this.pet.exp / this.maxExp * 100;
    }

}
