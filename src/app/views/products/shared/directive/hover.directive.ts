
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
    selector: '[appHover]'

})
export class HoverDirective{
    constructor(private el: ElementRef){
    } 
        @HostListener('mouseenter') onMouseEnter(){

            this.Highlight('beige');
        }
        @HostListener('mouseleave') onmouseleave(){
            this.Highlight(null);
        }

        private Highlight(color: string){
            this.el.nativeElement.style.backgroundColor= color;
        }
    
}