import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-top-projects',
  templateUrl: './top-projects.component.html',
  styleUrls: ['./top-projects.component.css']
})
export class TopProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
