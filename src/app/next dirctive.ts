import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[next]'
})

export class NextDirective{
    constructor(private ele: ElementRef){}

    @HostListener('click')
    funcNext(){
        var elements = this.ele.nativeElement.parentElement.parentElement.children[0];
        var sliderItem = elements.getElementsByClassName("item");
        elements.append(sliderItem[0]);
        console.log(elements);
    }

}