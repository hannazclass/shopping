import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'materialize-css';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements AfterViewInit  {
  routerLinkActiveOptions: {
    exact: boolean;
  }

  constructor() { 
    
  }

  ngAfterViewInit() {
    M.Sidenav.init($('.sidenav'));
  }

}
