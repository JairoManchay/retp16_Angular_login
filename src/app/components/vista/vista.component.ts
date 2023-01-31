import { Component } from '@angular/core';
import { ServicioapiService } from '../../services/servicioapi.service';
import { UserTs } from '../../models/user-ts';
import { BehaviorSubject, Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

const datos: UserTs[]=[]

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private serviciosApi: ServicioapiService){}

  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: any;
  datos: UserTs[]=[]

  ngOnInit(): void {

    
    this.serviciosApi.getVista().subscribe({
      next:(datos: UserTs[])=>{
        this.datos[0] = datos[0]

        this.dataSource = datos;
        console.log(this.dataSource)
      }
    })
  }
}


