import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-menu',
  templateUrl: './comp-menu.component.html',
  styleUrls: ['./comp-menu.component.css']
})
export class CompMenuComponent implements OnInit {

  links: string[] = ['Dashboard', 'UI Features', 'Layouts', 'Components', 'More', 'Pages'];

  constructor() { }

  ngOnInit() {
  }

}
