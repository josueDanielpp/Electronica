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
  vrb: number = 0;

  // Valores 2do formulario:
  vre: number = 0;
  vrc: number = 0;
  vce: number = 0;
  vr1: number = 0;
  vr2: number = 0;
  ib: number = 0;
  ic: number = 0;
  ie: number = 0;
  ir1: number = 0;
  ir2: number = 0;
  vc: number = 0;
  vb: number = 0;
  ve: number = 0;

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
    this.rth = 0;
    this.vth = 0;
    this.vrb = 0;

    this.vre = 0;
    this.vrc = 0;
    this.vce = 0;
    this.ib = 0;
    this.ic = 0;
    this.ie = 0;
    this.vr1 = 0;
    this.vr2 = 0;
    this.ir1 = 0;
    this.ir2 = 0;
    this.vc = 0;
    this.vb = 0;
    this.ve = 0;
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

    // Calcular Voltaje VC
    this.vc = this.vcc - this.vrc;

    // Calcular Voltaje VE
    this.ve = this.vre;

    // Calcular Voltaje VRB
    this.vrb = this.rth * this.ib / 1000;

    // Calcular Voltaje VB
    this.vb = this.vth - this.vrb;

    // Calculo Corriente IR2
    this.ir2 = this.vb / this.r2 * 1000;

    // Calcular Corriente IR2
    this.ir1 = this.ir2 - this.ib;

    // Calcular Volateje VR1
    this.vr1 = this.ir1 * this.r1 / 1000;

    // Calcular Volateje VR2
    this.vr2 = this.ir2 * this.r2 / 1000;
  }


  validaValoresForm2(transistor:string):void{
    // Faltan Validaciones para cada transistor
    
    this.calcularForm2();
  }

  calcularForm2():void{
    // Calcular Resistencia RC
    this.rc = this.vrc / this.ic;

    // Calcular Resistencia RE
    this.re = this.vre / this.ie;
    
    // Calcular Resistencia R1
    this.r1 = this.vr1 / this.ir1 * 1000;
    
    // Calcular Resistencia R1
    this.r2 = this.vr2 / this.ir2 * 1000;

    // Calcular Beta
    this.beta = this.ic / this.ib * 1000;

    // Calcular Voltaje VCC
    this.vcc = Number(this.vce) + Number(this.vrc) + Number(this.vre);
  }
}
