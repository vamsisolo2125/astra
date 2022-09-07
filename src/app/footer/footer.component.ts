import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arr:any
  constructor() { }
  
    
  ngOnInit(): void {
    // const arr = [ ' foo ' , ' bar ' ] ;
    // arr.sort()
    // console.log(arr,"fcwe")
  const foo =[1,3,22]
  foo.sort (( a , b )=> a - b ) ;
console.log ( foo ) ;
  }
  
}
