import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';
import { page } from './contact.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public page = page;
  public app;

  constructor(private appService: AppService) {
    appService.setPage(page);
    const config = appService.getConfig();
    this.app = config.app;
  }
  
  ngOnInit(): void {
  }

}
