import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() ocupacion: string = '';
  @Input() infoPersonal: any[] =[];
  @Input() estadisticas: any[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
