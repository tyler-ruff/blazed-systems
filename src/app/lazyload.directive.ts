/*
    @ Source: https://netbasal.com/lazy-load-images-in-angular-with-two-lines-of-code-beb13cd5a1c4
    @ Author: Netanel Basal
*/
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyLoadDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}