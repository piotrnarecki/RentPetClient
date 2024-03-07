import { Component, OnInit } from '@angular/core';

import { IPet } from './pet.model';
import { CommonModule } from '@angular/common';
import { PetService } from './pet.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  pets: any;

filter:string='';

  constructor(private petService: PetService) {
    
  }

  ngOnInit(){

    this.petService.getPets().subscribe((pets)=>{this.pets=pets})
    
      }


  

  getImageUrl(pet: IPet) {
    if (!pet) return '';
    return '/assets/images/' + pet.imageName;
  }

  getFilteredPets() {
    return this.filter === ''
      ? this.pets
      : this.pets.filter((pet: any) => pet.type === this.filter);
  }



}
