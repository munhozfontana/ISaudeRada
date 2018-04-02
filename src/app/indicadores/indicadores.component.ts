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
  myBarChart: any;
  myRadarChart: any;
  
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

    console.log(temp_max, temp_min)

    this.line = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: temp_min,
            borderColor: '#3cba9f',
            backgroundColor: '#3cba9f',
            label: 'Label 1',
            fill: false
          },
          {
            data: temp_max,
            borderColor: '#ffcc00',
            backgroundColor: '#ffcc00',
            label: 'Label 2', 
          fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        },
        maintainAspectRation: true
      }
    })

    // For a pie chart
    this.myPieChart = new Chart('asd',{
      type: 'pie',
      data: {
        datasets: [{
          data: temp_max,
          backgroundColor: ['#3cba9f', '#ffcc00', '#58ACFA']
        }],

        labels: [
            'Red',
            'Yellow'
        ]
    }
    
    });

    this.myBarChart= new Chart('myBar', {
      type: 'bar',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: temp_min,
            backgroundColor: '#3cba9f',
            label: 'Label 1'
          },
          {
            data: temp_max,
          backgroundColor: '#ffcc00',
          label: 'Label 2'
          }
        ]
      }
  });

  this.myRadarChart = new Chart('myRadar', {
    type: 'radar',
    data: {
      labels: ['Topo', 'Direita', 'Baixo', 'Esquerda'],
      datasets: [{
          data: temp_min,
          backgroundColor: '#3cba9f',
          label: 'Label 1'
      },
      {
        data: temp_max,
        backgroundColor: '#ffcc00',
        label: 'Label 2'
    }]
  }
});
    
  }

}
