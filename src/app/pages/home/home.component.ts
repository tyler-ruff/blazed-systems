import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';

import { page } from './home.page'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }
}