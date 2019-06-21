import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventRegServiceService {
  data: any;

  constructor(private http: HttpClient) {
    this.data = null;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
// tslint:disable-next-line: max-line-length
      this.http.get('https://www.googleapis.com/calendar/v3/calendars/1mngef4tbnpe7bmre6leqkgfc8%40group.calendar.google.com/events?key=AIzaSyCUEemyQPFrF7TJy1aYkocLlSYfx5hQFys&showDeleted=false&singleEvents=true&orderBy=startTime&timeMin=' + new Date().toISOString())
        .subscribe(data => {
          console.log(data);
        },
        err =>{
            console.log(err);
            // this.globalOverlayProvider.dismissLoading();
            // this.errorHandler.handleHTTPError(err);
        });
    });
  }
}
