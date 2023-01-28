import { Component, OnInit } from '@angular/core';

import { site } from 'src/config/site';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public site = site;
  constructor() { }

  ngOnInit(): void { }
}