import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {  

  @Input('myHighlight') highlightColor: string;

  private element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void { 
    console.log('yes');
  }

  @HostListener('mouseenter')
  mouseEnter(event){
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave')
  mouseLeave(event){
    this.highlight(null);
  }

  private highlight(color){
    this.element.style.backgroundColor = color;
  }

}
