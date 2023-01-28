import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './unknown.page';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {
  
  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }

}
