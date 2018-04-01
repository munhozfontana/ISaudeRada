import { Component, OnInit } from '@angular/core';

import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';
import { IndicadoresService } from './indicadores.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
  
  line: any;
  dadosOnComponet: any;
  myPieChart: any;
  
  constructor(private serviceEficiencia: IndicadoresService) { }

  eficiencia(a) { 

    
  }

  ngOnInit() {
    this.dadosOnComponet = this.serviceEficiencia.dados()

    let temp_max = this.dadosOnComponet['list'].map(res => res.main.temp_max)
    let temp_min = this.dadosOnComponet['list'].map(res => res.main.temp_min)
    let alldates = this.dadosOnComponet['list'].map(res => res.dt)

    let weatherDates = []
    alldates.forEach((res) => {
      let jsdate = new Date(res * 1000)
      weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
    })


    this.line = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: temp_max,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: temp_min,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })

    // For a pie chart
    this.myPieChart = new Chart('asd',{
      type: 'pie',
      data: {
        datasets: [{
            data: [10, 20, 30],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }
    
    });
    
  }

}
