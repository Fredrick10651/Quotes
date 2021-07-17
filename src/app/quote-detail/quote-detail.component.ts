import { Component, OnInit, Input,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  // quoteDelete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }

  @Input() quote: Quote;
  constructor() {}

  ngOnInit(): void {}
}
