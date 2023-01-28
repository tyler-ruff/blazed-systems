import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Config } from 'fire-ng/lib/interfaces/config';
import { Layout } from 'fire-ng/lib/interfaces/layout';

import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'blz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public app: Config;
  public site: Layout;

  burgerVisible: boolean;

  constructor(appService: AppService, private router: Router) { 
    const config = appService.getConfig();
    this.app = config.app;
    this.site = config.site;
    this.burgerVisible = config.site.burgerVisible;
    router.events.subscribe((val) => {
      // close menu on route change
      this.burgerVisible = false;  
    });
  }

  ngOnInit(): void {
  }

}