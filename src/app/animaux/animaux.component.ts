import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {

  animaux: Array<Animal> = [];
  constructor(private service: AnimalService) {
    this.service.getAnimaux().subscribe(a => this.animaux = a);
  }

  ngOnInit() {
  }

}
