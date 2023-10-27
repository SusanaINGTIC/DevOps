import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nombre = 'Brandon Moreno';
  ocupacion = 'Peleador mexicano de artes marciales mixtas';
  infoPersonal = [
    {
      campo: 'Nacimiento',
      valor: '7 de diciembre de 1993 (edad 29 años), Tijuana',
    },
    { campo: 'Estatura', valor: '1.7 m' },
    { campo: 'Peso', valor: '57 kg' },
    { campo: 'Envergadura', valor: '1.78 m' },
    { campo: 'Apodo', valor: 'The Assassin Baby' },
  ];
  estadisticas = [
    {campo: 'Total', valor : '30'},
    {campo: 'Victorias', valor : '21'},
    {campo: 'Por nocaut', valor : '5'},
    {campo: 'Por sumisión', valor : '11'},
    {campo: 'Por decisión', valor : '5'},
    {campo: 'Derrotas', valor : '7'},
    {campo: 'Por decisión', valor : '7'},
    {campo: 'Empates', valor : '2'},
  ]
  title = 'portafolio_angular';
}
