import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-center',
  templateUrl: './company-center.component.html',
  styleUrls: ['./company-center.component.css']
})
export class CompanyCenterComponent implements OnInit {

  title: string;
  content: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Company Management';
    this.content = 'This is company list';
  }

}
