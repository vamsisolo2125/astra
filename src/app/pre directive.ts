import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[pre]'
})

export class PreDirective{
    constructor(private ele: ElementRef){}

    @HostListener('click')
    funcPre(){
        var elements = this.ele.nativeElement.parentElement.parentElement.children[0];
        var sliderItem = elements.getElementsByClassName("item");
        elements.prepend(sliderItem[sliderItem.length - 1]);
    }
}