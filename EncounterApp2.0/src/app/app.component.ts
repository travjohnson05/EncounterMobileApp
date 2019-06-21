import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { StudentInfoServiceService } from './student-info-service.service';
import { EventServiceService } from './event-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private studentInfoService: StudentInfoServiceService,
    private eventService: EventServiceService
  ) {
    this.initializeApp();
    this.studentInfoService.loadStudentInfo();
    this.eventService.loadEventObject();
    this.eventService.load().then(data => {
        // console.log(data);
        console.log(eventService.eventsObject);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
