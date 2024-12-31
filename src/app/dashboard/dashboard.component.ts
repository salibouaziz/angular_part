import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MemberService } from 'src/Services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private ms : MemberService,private es:EventService) { }

  nb_members:number=0;
  nb_events:number=0;
  nb_tools:number=0;
  nb_article:number=0;
 


  ngOnInit(): void {
    this.ms.getAllMembers().subscribe((data)=>{
      this.nb_members=data.length;
    })
    this.es.getAllEvent().subscribe((data)=>{
      this.nb_events=data.length;
    })

  }

  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels: string[] = ["a","b","c","d","h","f"];
  chartOptions: ChartOptions = {};
}
