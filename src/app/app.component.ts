import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'POC';
  myDate = new Date();
  constructor(private themeService: NbThemeService, private datePipe: DatePipe) {
    this.themeService.changeTheme('default');
  }
}
