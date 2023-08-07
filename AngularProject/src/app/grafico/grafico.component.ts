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
        title: "Campeones",
        interval: 1
      },
      data: [{
        type: "bar",
        dataPoints: [
          { y: 11, label: "🇦🇺"},
          { y: 3, label: "ᏼꭼꮮ" },
          { y: 8, label: "ꮯꭺꮑ" },
          { y: 5, label: "ᏽᏼꭱ" },
          { y: 11, label: "ᏽꭼꭱ" },
          { y: 2, label: "ꮑꮓꮮ" },
          { y: 10, label: "ꮪꮼꮖ" },
          { y: 28, label: "ꮼꮪꭺ" },
          { y: 7, label: "ꮓꮖꮇ" }
        ]
      }]
    });

    this.chart.render();
  }


}