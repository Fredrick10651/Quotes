import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14), 'John'),
    new Quote('Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9),'Kate'),
    new Quote('Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12),'Perrys'),
    new Quote('Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18),'Jake'),
    new Quote('Solve math homework','Damn Math',new Date(2019,2,14),'Jmes'),
    new Quote('Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14),'Jade'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
