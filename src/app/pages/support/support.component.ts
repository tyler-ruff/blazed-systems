import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './support.page';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }

}
