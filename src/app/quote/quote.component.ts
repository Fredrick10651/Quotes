import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Martin Fowler',new Date(2020,3,14), 'John'),
    new Quote('In order to be irreplaceable, one must always be different','Coco Chanel',new Date(2019,6,9),'Kate'),
    new Quote('Ruby is rubbish! PHP is phpantastic!','Nikita Popov',new Date(2022,1,12),'Perrys'),
    new Quote('Code is like humor. When you have to explain it, it’s bad.','Cory House',new Date(2019,0,18),'Jake'),
    new Quote('Before software can be reusable it first has to be usable.','Ralph Johnson',new Date(2019,2,14),'Jmes'),
    
  ];
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }



  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.iscompleteDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() {}

  ngOnInit(): void {}
}
