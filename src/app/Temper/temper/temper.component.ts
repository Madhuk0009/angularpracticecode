import { Component } from '@angular/core';

@Component({
  selector: 'app-temper',
  templateUrl: './temper.component.html',
  styleUrls: ['./temper.component.scss']
})
export class TemperComponent {

  laddu= ['NTR','RAM','ALLARJUN','HERORAM','CHIRANJEEVI']

  property:string = "../../../assets//garden.jpg";

  // Common Structural Directives in Angular:
  // *ngFor 
  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes'];

  // *IF Condition directive:
  isactive:boolean = true;

  interpolation:string = "This is string interpolation data binding";

  ifcondition:string ="../../../assets//ice.jpg";
  available: any;
  
obj = {
  name: 'madhu'
}

// withparamenter with return (T T)
  withpara(data:any){
   return data + "  ==  " +this.obj.name;
  }
  
  // without parameter without return. (F F)
  withoutparameter(){ 
    
  }
  testdata:any;

  withparawithoutreturn(data:any){
    console.log(data.value)
 }

}
