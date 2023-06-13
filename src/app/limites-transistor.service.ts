import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class LimitesTransistorService {



  constructor() { }
  error(icmax:number,vemax:number){
    Swal.fire({
      icon: 'error',
      title: 'Los valores no son apropiados',
      text: 'la ic maxima es '+icmax+" mA el voltaje colector-emisor: "+vemax+" V",
      footer: 'comprueba los datos :('
    })
  }
  errorbeta(betamax:number,betamin:number){
    Swal.fire({
      icon: 'error',
      title: 'El valor de beta no es apropiado',
      text: 'el valor maximo de beta es: '+betamax+" el valor minimo es de "+betamin,
      footer: 'comprueba los datos :('
    })
  }
  validaValoresForm1(transistor:string,valores:any):boolean{
    // Validaciones para MPS2222
    if(transistor == "MPS2222"){
      console.log(valores.ic+ "  "+valores.vce)
      if(valores.ic <= 600 && valores.vce <= 30){
        
        return true;
      }else{
        this.error(600,30)  
        console.log("adioz")
        // Si no cumple con condición
        return false;
      }
      

    }
    // Validaciones para TIP41
    else if(transistor == "TIP41"){

      if(valores.ic <= 10000 && valores.vce <= 40){
       
        return true;
      }
      this.error(10000,40)  

      // Si no cumple con condición
      return false;
    }
    // Validaciones para BC547
    else{

      if((valores.ic <= 100 && valores.vce <= 45)){
        
        return true;
      }
      this.error(100,45)
        

      // Si no cumple con condición
      return false;
    }
  }

  validaLimitesBeta(transistor:string, beta:number):boolean{
    // Validaciones para MPS2222
    if(transistor == "MPS2222"){
      
      if(beta >= 75 && beta <= 300){
        
        return true;
      } 
      this.errorbeta(300,75);
      console.log(beta);
      return false;
    }
    // Validaciones para TIP41
    else if(transistor == "TIP41"){
      if(beta >= 15 && beta <= 75){
        
        return true;
      }
      this.errorbeta(75,15);
      return false;
    }
    // Validaciones para BC547
    else{
      if(beta >= 110 && beta <= 800){
        
        return true;
      }
      this.errorbeta(800,110);
      
      return false;
    }
  }
}
