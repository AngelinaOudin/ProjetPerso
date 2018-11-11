import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  model: Animal;

  constructor(private service: AnimalService, private router: Router) {
    this.model = new Animal();
   }

  ngOnInit() {
  }
  onSubmit() {
    this.service.addAnimal(this.model);
    this.router.navigate(['/']);
  }
}
