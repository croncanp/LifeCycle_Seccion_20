import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import internal from 'node:stream';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit-price');
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy-price');
    this.interval$?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('Componente Hijo: ngOnChanges-price');
  }
}
