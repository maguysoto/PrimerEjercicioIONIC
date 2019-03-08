import { Component } from '@angular/core';
import { AnimalesService } from '../api/animales.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
animales: any;

constructor(private servicio_animales: AnimalesService){ 
  
  	 }

  	 ngOnInit(){
  	 	console.log("Probando desde el constructor");
       this.servicio_animales.getAnimales().subscribe(data=>{
       	console.log(data);
       	this.animales=data.animales;
       	console.log(this.animales);
       });
  	 }

}
