import { Component } from '@angular/core';

 //Importación de la interfaz
 import { Inter1 } from '../interfaces/inter1';

 //Importación del servicio
 import { DataserviceService } from '../providers/dataservice.service';

@Component({
  selector: 'app-top3-male',
  templateUrl: './top3-male.component.html',
  styleUrls: ['./top3-male.component.css']
})
export class Top3MaleComponent {

  public data : Inter1[] = [];

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataserviceService) { }

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Inter1[]); 
    })
  }

}
