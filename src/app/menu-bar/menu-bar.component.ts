import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  links: MenuItem[];

  ngOnInit() {
    this.links = [{
      label: 'Accueil', routerLink: ['/']
    },
    {
      label: 'Animaux', items: [
        { label: 'Animaux', routerLink: ['/animaux'] },
        { label: 'Ajouter un animal', routerLink: ['/ajoutAnimal'] }
      ]
    }
    ]
  }
}
