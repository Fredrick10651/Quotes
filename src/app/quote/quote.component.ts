import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Watch finding',description:'huh, just a quote' },
    { id: 2, name: 'Buy Cookies', description:'huh, just a quote' },
    { id: 3, name: 'Get new Phone Case',description:'huh, just a quote' },
    { id: 4, name: 'Get Dog Food' ,description:'huh, just a quote'},
    { id: 5, name: 'Get new Phone Case', description:'huh, just a quote'},
    { id: 6, name: 'Get Dog Food' ,description:'huh, just a quote'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
