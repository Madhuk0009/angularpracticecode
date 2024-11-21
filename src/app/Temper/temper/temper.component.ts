import { Component } from '@angular/core';

@Component({
  selector: 'app-temper',
  templateUrl: './temper.component.html',
  styleUrls: ['./temper.component.scss']
})
export class TemperComponent {

  laddu= ['NTR','RAM','ALLARJUN','HERORAM','CHIRANJEEVI']

  // Common Structural Directives in Angular:
  // *ngFor 
  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes'];

  // *IF Condition directive:
  isactive:boolean = true;

  interpolation:string = "This is string interpolation data binding";

  property:string ="../../../assets//garden.jpg";
available: any;
  


// withparamenter with return (T T)
  withpara(data:any){
  console.log(data)
   return 
  }
  
  // without parameter without return. (F F)
  withoutparameter(){ 
  }
 

}
