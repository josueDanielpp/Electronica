import { Component } from '@angular/core';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent {
  form1Habilitado:boolean = true;
  form2Habilitado:boolean = true;
  // Valores 1er formulario:
  vcc: number = 0;
  re: number = 0;
  rc: number = 0;
  r1: number = 0;
  r2: number = 0;
  beta: number = 0;
  rth: number = 0;
  vth: number = 0;

  // Valores 2do formulario:
  vre: number = 0;
  vrc: number = 0;
  vce: number = 0;
  vr1: number = 0;
  vr2: number = 0;
  ib: number = 0;
  ic: number = 0;
  ie: number = 0;

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
    this.re = 0;
    this.rc = 0;
    this.r1 = 0;
    this.r2 = 0;
    this.beta = 0;

    this.vre = 0;
    this.vrc = 0;
    this.vce = 0;
    this.ib = 0;
    this.ic = 0;
    this.ie = 0;
  }

  validaValoresForm1(transistor:string):void{
    // Faltan Validaciones para cada transistor

    this.calcularForm1();
  }

  calcularForm1():void{
    // Calcular resitencia de Thevenin
    this.rth = this.r1 * this.r2 / (Number(this.r1) + Number(this.r2));
    console.log(this.rth);

    // Calcular Voltaje de Thevenin
    this.vth = this.vcc * this.r2 / (Number(this.r1) + Number(this.r2));
    console.log(this.vth);

    // Calcular Corriente IB
    this.ib = (this.vth - 0.7) / (this.rth + (Number(this.beta) + Number(1)) * this.re);
    this.ib *= 1000;

    // Calcular Corriente IC
    this.ic = this.beta * this.ib;
    this.ic /= 1000;

    // Calcular Corriente IE
    this.ie = this.ic + this.ib / 1000;

    // Calcular Voltaje VRC
    this.vrc = this.ic * this.rc;

    // Calcular Voltaje VRE
    this.vre = this.ie * this.re;

    // Calcular Voltaje VCE
    this.vce = this.vcc - this.vrc - this.vre;
  }


  validaValoresForm2(transistor:string):void{
    // Faltan Validaciones para cada transistor
    
    this.calcularForm2();
  }

  calcularForm2():void{
    // // Calcular RB
    // this.rb = this.vrb/(this.ib/1000000); 
    // this.rb/=1000; // Convertir a Kilo-Ohms
    // console.log(this.rb);

    // // Calcular RC
    // this.rc = this.vrc/(this.ic/1000);
    // this.rc /= 1000; // Convertir a Kilo-Ohms
    // console.log(this.rc);

    // this.vcc = Number(this.vrc) + Number(this.vce);
    // console.log(this.vcc);

    // this.beta = (this.ic/1000)/(this.ib/1000000);
    // console.log(this.beta);
  }
}
