import {Component, OnInit, ViewChild} from '@angular/core';
// import {ngxLoadingAnimationTypes, NgxLoadingComponent} from 'ngx-loading';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private ngxService: NgxUiLoaderService
  ) { }
  ngOnInit() {
    this.ngxService.start();
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 3000);

    // OR
    this.ngxService.startBackground('do-background-things');
    // Do something here...
    this.ngxService.stopBackground('do-background-things');
  }

}
