import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() ocupacion: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
