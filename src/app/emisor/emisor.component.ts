import { Component } from '@angular/core';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  
  form1Habilitado:boolean = true;
  form2Habilitado:boolean = true;
  // Valores 1er formulario:
  vcc:number=0;
  rb:number=0;
  rc:number=0;
  re:number=0;
  beta:number=0;

  // Valores 2do formulario:
  vrb:number=0;
  vrc:number=0;
  vre:number=0;
  vb:number=0;
  vc:number=0;
  ve:number=0;
  vce:number=0;
  ib:number=0;
  ic:number=0;
  ie:number=0;
  aux:number=0;

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
    this.re = 0;
    this.beta = 0;
    this.vrb = 0;
    this.vrc = 0;
    this.vre = 0;
    this.vb = 0;
    this.vc = 0;
    this.ve = 0;
    this.vce = 0;
    this.ib = 0;
    this.ic = 0;
    this.ie = 0;
    this.aux = 0;

  }

  validaValoresForm1(transistor:string):void{
    // Faltan Validaciones para cada transistor

    this.calcularForm1();
  }

  calcularForm1():void{
    // Calcular corriente de IB:
    this.aux = Number(this.beta)+Number(1);
    this.ib = (this.vcc-0.7)/(Number(this.rb*1000)+Number((this.aux)*(this.re*1000)));
    this.ib *=1000000; 

    // Calcular corriente de IC:
    this.ic = this.beta*this.ib;
    this.ic/=1000;
    
    //Calcular corriente de IE
    this.ie = Number(this.ib/1000000) + Number(this.ic);
    //this.ie = Number(this.ib/1000000) + Number(this.ic/1000);

    // Calcular VRE
    this.vre = ((this.re*1000)*(Number(this.ib/1000000) + Number(this.ic/1000)));

    // Calcular VRC
    this.vrc = (this.rc*this.ic);

    // Calcular VRB
    this.vrb = ((this.rb*1000)*(this.ib/1000000));

    // Calcular VB
    this.vb = (this.vcc-this.vrb);

    //Calcular VC
    this.vc = (this.vcc-this.vrc);

    //Calcular VE
    this.ve = (this.vre);

    // Calcular VCE
    this.vce = this.vcc - this.vrc - this.vre;
  }


  validaValoresForm2(transistor:string):void{
    // Faltan Validaciones para cada transistor
    
    this.calcularForm2();
  }

  calcularForm2():void{

    //Calcular VCC
    this.vcc= Number(this.vrc) + Number(this.vce) + Number(this.vre);

    // Calcular RB
    this.rb = (this.vcc-0.7-this.ve)/(this.ib/1000000);
    this.rb/=1000; // Convertir a Kilo-Ohms

    // Calcular RC
    this.rc = (this.vcc-this.vc)/(this.ic/1000);
    this.rc/=1000; // Convertir a Kilo-Ohms

    //Calcular RE
    this.re = this.ve/(this.ie/1000);
    this.re/=1000;

    this.beta = (this.ic/1000)/(this.ib/1000000);
  }
}
