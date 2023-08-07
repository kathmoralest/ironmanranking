import { Component } from '@angular/core';
declare var CanvasJS: any;

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

  chart: any;

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      axisX: {
        title: "País",
        reversed: true,
      },
      axisY: {
        title: "Ganadores IronMan",
        interval: 1
      },
      data: [{
        type: "bar",
        dataPoints: [
          { y: 11, label: "AUS" },
          { y: 3, label: "BEL" },
          { y: 8, label: "CAN" },
          { y: 5, label: "GBR" },
          { y: 11, label: "GER" },
          { y: 2, label: "NZL" },
          { y: 10, label: "SUI" },
          { y: 28, label: "USA" },
          { y: 7, label: "ZIM" }
        ]
      }]
    });

    this.chart.render();
  }


}