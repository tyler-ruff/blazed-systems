import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './success.page';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }

}
