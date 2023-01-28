import { Component, OnInit } from '@angular/core';
import { Config } from 'fire-ng/lib/interfaces/config';
import { Layout } from 'fire-ng/lib/interfaces/layout';

import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'blz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public app: Config;
  public site: Layout;

  public year: string = new Date().getFullYear().toString();

  constructor(appService: AppService) {
    const config = appService.getConfig();
    this.app = config.app;
    this.site = config.site;
  }

  ngOnInit(): void {
  }

}