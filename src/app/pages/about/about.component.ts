import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './about.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }

}
