import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LimitesTransistorService {



  constructor() { }

  validaValoresForm1(transistor:string,valores:any):boolean{
    // Validaciones para MPS2222
    if(transistor == "MPS2222"){
      
      if(valores.ic <= 600 && valores.ce >= 30)
          return true;

        // Si no cumple con condición
        return false;

    }
    // Validaciones para TIP41
    else if(transistor == "TIP41"){

      if((valores.ic <= 10 && valores.ce >= 40 && 
          valores.ce <= 100))
          return true;

      // Si no cumple con condición
      return false;
    }
    // Validaciones para BC547
    else{

      if((valores.ic >= 100 && valores.ce >= 45))
        return true;

      // Si no cumple con condición
      return false;
    }
  }

  validaLimitesBeta(transistor:string, beta:number):boolean{
    // Validaciones para MPS2222
    if(transistor == "MPS2222"){
      
      if(beta >= 75 && beta <= 375) return true;
      
      return false;
    }
    // Validaciones para TIP41
    else if(transistor == "TIP41"){
      if(beta >= 15 && beta <= 75) return true;
      
      return false;
    }
    // Validaciones para BC547
    else{
      if(beta >= 110 && beta <= 800) return true;
      
      return false;
    }
  }
}
