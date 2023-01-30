import { Component } from '@angular/core';
import { UserTs } from 'src/app/models/user-ts';
import { AuthenticacionService } from 'src/app/services/authenticacion.service';
import { ServicioapiService } from '../../services/servicioapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(private serviciosApi: ServicioapiService,
    private authen: AuthenticacionService, private route: Router){}

  datos: UserTs[]=[]

  name: string='';
  email: string=''

  redireccion='';

  mensaje: number=1;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.serviciosApi.getVista().subscribe({
      next:(datos: UserTs[])=>{
        this.datos = datos
        console.log(datos)
      }
    })
  }

  logearse(){
    if(this.email=="" || this.name==""){
      return;
    }else{
      for(let i=0; i<this.datos.length; i++){
        if(this.email==this.datos[i].email && this.name== this.datos[i].username){
          alert("datos Correctos")
          this.mensaje=1;
          this.authen.login();
          this.redireccion = this.authen.urlUSuarioIntentandoAcceder;
          this.authen.urlUSuarioIntentandoAcceder = '';
          this.route.navigate([this.redireccion]);
        }
        else{
          this.mensaje++;
        }
      }
    }

    console.log(this.mensaje);
    return this.mensaje;
  }
}
