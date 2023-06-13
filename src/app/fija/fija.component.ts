import { Component } from '@angular/core';
import { LimitesTransistorService } from '../limites-transistor.service';

@Component({
  selector: 'app-fija',
  templateUrl: './fija.component.html',
  styleUrls: ['./fija.component.css']
})
export class FijaComponent {

  form1Habilitado:boolean = true;
  form2Habilitado:boolean = true;
  // Valores 1er formulario:
  vcc!:number;
  rb!:number;
  rc!:number;
  beta!:number;
  vcb!:number;
  veb!:number;

  // Valores 2do formulario:
  vrb!:number;
  vrc!:number;
  vce!:number;
  ib!:number;
  ic!:number;

  constructor(private limitesTransistor:LimitesTransistorService){}

  desactivarFormulario(form:number):void{
    // Si dio clic al formulario 1 se desactiva el 2do formulario
    if(form == 1){
      this.form2Habilitado = false;
    }
    else{ // Si dio clic al formulario 2 se desactiva el 1er formulario
      this.form1Habilitado = false;
    }
    
  }

  // Inicializa ambos formularios
  reset():void{
    this.form1Habilitado = true;
    this.form2Habilitado = true;
    this.vcc = 0;
    this.rb = 0;
    this.rc = 0;
    this.beta = 0;
    this.vrb = 0;
    this.vrc = 0;
    this.vce = 0;
    this.ib = 0;
    this.ic = 0;
  }

  validaValoresForm1(transistor:string):void{

    // Si cumple con valores reales de Beta
    if(this.limitesTransistor.validaLimitesBeta(transistor, this.beta)){

      this.calcularForm1();
      let valores = {ib:this.ib,ic:this.ic,vce:this.vce};
      
      // Si no se cumplen límites de corrientes y voltajes
      if(!this.limitesTransistor.validaValoresForm1(transistor,valores)){
        console.log("VALORES NO CUMPLEN .l.");
        this.vrb = 0;
        this.vrc = 0;
        this.vce = 0;
        this.ib = 0;
        this.ic = 0;
      }
      // Si se cumplen aparecen valores en input
    }
    // No cumple con valores reales de Beta
    else{
      console.log("BETA NO CUMPLE .l.")
    }
  }

  calcularForm1():void{
    // Calcular corriente de IB:
    this.ib = (this.vcc-0.7)/(this.rb*1000);
    this.ib *=1000000; 

    // Calcular corriente de IC:
    this.ic = this.beta*this.ib;
    this.ic/=1000;
    // Calcular VCE
    this.vce = this.vcc - (this.rc*this.ic);

    // Calcular VRC
    this.vrc = this.vcc - this.vce;

    // Calcular VRB
    this.vrb = this.vcc - 0.7;


    // Calcular
  }


  validaValoresForm2(transistor:string):void{
    
      this.calcularForm2();
      if(this.vcc > 0 && !this.limitesTransistor.validaLimitesBeta(transistor,this.beta)){

      // Si no se cumplen límites de beta
        console.log("VALORES NO CUMPLEN .l.");
        this.vcc = 0;
        this.rb = 0;
        this.rc = 0;
        this.beta = 0;
      }
      // Si se cumplen aparecen valores en input
  }

  calcularForm2():void{
    // Calcular RB
    this.rb = this.vrb/(this.ib/1000000);
    this.rb/=1000; // Convertir a Kilo-Ohms

    // Calcular RC
    this.rc = this.vrc/(this.ic/1000);
    this.rc/=1000; // Convertir a Kilo-Ohms

    this.vcc= Number(this.vrc) + Number(this.vce);

    this.beta = (this.ic/1000)/(this.ib/1000000);
  }
}
