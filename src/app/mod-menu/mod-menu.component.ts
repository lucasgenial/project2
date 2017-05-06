import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-menu',
  templateUrl: './mod-menu.component.html',
  styleUrls: ['./mod-menu.component.css']
})
export class ModMenuComponent implements OnInit {

  nomeLink: string;
  linkHref: string;
  links: string[] = ['Dashboard', 'UI Features', 'Layouts', 'Components', 'More', 'Pages'];

  constructor() {
    this.linkHref = '';
    this.nomeLink = 'Home';
  }

  ngOnInit() {
  }
}