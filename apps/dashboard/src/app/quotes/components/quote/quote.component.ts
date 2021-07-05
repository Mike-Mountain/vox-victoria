import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../models/quote.model';

@Component({
  selector: 'dash-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  public quote: Quote | null = null;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = new Quote(quote[0]);
    })
  }

}
