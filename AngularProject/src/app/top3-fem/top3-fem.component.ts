import { Component } from '@angular/core';

//Importación de la interfaz
import { Inter1 } from '../interfaces/inter1';

//Importación del servicio
import { DataserviceService } from '../providers/dataservice.service';


@Component({
  selector: 'app-top3-fem',
  templateUrl: './top3-fem.component.html',
  styleUrls: ['./top3-fem.component.css']
})
export class Top3FemComponent {

  //Atributo con el tipo de dato de la interfaz
  public data : Inter1[] = [];

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataserviceService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Inter1[]); 
    })
  }

}
