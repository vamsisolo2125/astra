import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as THREE from 'three';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
model:any={}
public verify!: object
onsubmit(form:NgForm){
  this.verify={name:this.model.name,number:this.model.number,email:this.model.email}
this.model={}
if(form.valid){
  alert("sucess")
}else{
  alert("incorect")
}
console.log(this.verify)
}
  constructor() { }

  ngOnInit(): void {
  }
 
}
