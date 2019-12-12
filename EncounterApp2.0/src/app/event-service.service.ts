import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  data: any;
  public eventsObject:any;

  constructor(private http: HttpClient) {
    this.data = null;
  }

  formatRawEventData(data){
    const value = data.items.map((resultData) => {
      // The .map lets me take the original data and map it to the proper format

      if ('date' in resultData.start) {
        const date = resultData.start.date.split("-"); //split yyyy mm dd
        const startYear = date[0];
        const startMonth = this.monthString(date[1]);
        const startDay = date[2];
        const startDateISO = new Date(startMonth + " " + startDay + ", " + startYear + " 00:00:00");
        const startDayWeek = this.dayString(startDateISO.getDay());

        return {
          link: resultData.htmlLink,
          startDate: resultData.start.date,
          startYear: startYear,
          startMonth: startMonth,
          startDay: startDay,
          startDayWeek: startDayWeek,
          startHour: null,
          startMin: null,
          startTime: null,
          ampm: null,
          summary: resultData.summary,
          description: resultData.description
        };
      } else {
        const dateTime = resultData.start.dateTime.split("T"); //split date from time
        const date = dateTime[0].split("-"); //split yyyy mm dd
        const startYear = date[0];
        const startMonth = this.monthString(date[1]);
        const startDay = date[2];
        const startDateISO = new Date(startMonth + " " + startDay + ", " + startYear + " 00:00:00");
        const startDayWeek = this.dayString(startDateISO.getDay());
        const time = dateTime[1].split(":"); //split hh ss etc...
        const startHour = this.twelveHr(time[0]);
        const ampm = this.AmPm(time[0]);
        const startMin = time[1];

        return {
          link: resultData.htmlLink,
          startDate: resultData.start.dateTime,
          startYear: startYear,
          startMonth: startMonth,
          startDay: startDay,
          startDayWeek: startDayWeek,
          startHour: startHour,
          startMin: startMin,
          startTime: startHour + ":" + startMin + " " + ampm,
          ampm: ampm,
          summary: resultData.summary,
          description: resultData.description
        };
      }
    });

    return value;
  }

  async load() {
    if (this.data) {
      // already loaded data
      return this.data;
    }
    const response = await this.http.get('https://www.googleapis.com/calendar/v3/calendars/1mngef4tbnpe7bmre6leqkgfc8%40group.calendar.google.com/events?key=AIzaSyCUEemyQPFrF7TJy1aYkocLlSYfx5hQFys&showDeleted=false&singleEvents=true&orderBy=startTime&timeMin=' + new Date().toISOString()).toPromise();
    console.log(this.formatRawEventData(response));
    return this.formatRawEventData(response);
    // don't have the data yet
    // return await this.http.get('https://www.googleapis.com/calendar/v3/calendars/1mngef4tbnpe7bmre6leqkgfc8%40group.calendar.google.com/events?key=AIzaSyCUEemyQPFrF7TJy1aYkocLlSYfx5hQFys&showDeleted=false&singleEvents=true&orderBy=startTime&timeMin=' + new Date().toISOString())
    //     .subscribe(async data => {
    //       // this.data = data;
    //       console.log(this.formatRawEventData(data));
    //       return this.formatRawEventData(data).resolve;
    //     },
    //     err => {
    //         console.log(err);
    //         // this.globalOverlayProvider.dismissLoading();
    //         // this.errorHandler.handleHTTPError(err);
    //     });
  }



    //--------------------- num Month to String
    public monthString(num) {
      if (num === "01") { return "January"; }
      else if (num === "02") { return "February"; }
      else if (num === "03") { return "March"; }
      else if (num === "04") { return "April"; }
      else if (num === "05") { return "May"; }
      else if (num === "06") { return "June"; }
      else if (num === "07") { return "July"; }
      else if (num === "08") { return "August"; }
      else if (num === "09") { return "September"; }
      else if (num === "10") { return "October"; }
      else if (num === "11") { return "November"; }
      else if (num === "12") { return "December"; }
    }
    //--------------------- end
  
    //--------------------- from num to day of week
    dayString(num) {
      if (num == "1") { return "Monday" }
      else if (num == "2") { return "Tuesday" }
      else if (num == "3") { return "Wednesday" }
      else if (num == "4") { return "Thursday" }
      else if (num == "5") { return "Friday" }
      else if (num == "6") { return "Saturday" }
      else if (num == "0") { return "Sunday" }
    }
    //--------------------- end
  
    //--------------------- From 24h to Am/Pm
    twelveHr(num) {
      if (num <= 12) { num }
      return this.padNum(num - 12);
    }
    //--------------------- end
  
    //--------------------- From 24h to Am/Pm
    AmPm(num) {
      if (num <= 12) { return "a.m." }
      return "p.m.";
    }
    //--------------------- end
  
    //--------------------- Add a 0 to numbers
    padNum(num) {
      if (num <= 9) {
        return "0" + num;
      }
      return num;
    }
    //--------------------- end
}
