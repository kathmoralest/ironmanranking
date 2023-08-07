import { Component } from '@angular/core';

//Importación de la interfaz
import { Inter1 } from '../interfaces/inter1';

//Importación del servicio
import { DataserviceService } from '../providers/dataservice.service';

interface AthleteWithRepetitions {
  Athlete: string;
  Repetitions: number;
}

@Component({
  selector: 'app-titulostotal',
  templateUrl: './titulostotal.component.html',
  styleUrls: ['./titulostotal.component.css']
})
export class TitulostotalComponent {
  // Atributo con el tipo de dato de la interfaz
  public data: Inter1[] = [];
  public dataWithRepetitions: AthleteWithRepetitions[] = [];

  // Inyección de dependencia del servicio
  constructor(private dataProvider: DataserviceService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Inter1[];
      this.calculateRepetitions();
    });
  }

  calculateRepetitions() {
    // Creamos un diccionario para contar las repeticiones de cada nombre de atleta
    const repetitionsMap: { [key: string]: number } = {};

    // Recorremos los datos para contar las repeticiones
    for (const datum of this.data) {
      if (datum.Place === '1') {
        const athleteName = datum.Athlete;
        if (repetitionsMap[athleteName]) {
          repetitionsMap[athleteName]++;
        } else {
          repetitionsMap[athleteName] = 1;
        }
      }
    }

    // Convertimos el diccionario en un array para poder mostrarlo en la tabla
    this.dataWithRepetitions = Object.keys(repetitionsMap).map((athleteName) => ({
      Athlete: athleteName,
      Repetitions: repetitionsMap[athleteName]
    }));
    this.dataWithRepetitions.sort((a, b) => b.Repetitions - a.Repetitions);
  }
}
