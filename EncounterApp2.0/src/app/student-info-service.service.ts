import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoServiceService { 
  globalStudentInfo: any;
  student: any;
  formValues: String;
  errorString: String;

  constructor(
    private platform: Platform,
    private storage: Storage
    ){
      this.globalStudentInfo = "";
      this.setupStudentInfoInStorage();
  }

  async getFromStorageAsync(value){
      return await this.storage.get(value);
  }

  setInStorage(key, value){
      this.storage.set(key, value);
  }

  setGlobalStudentInfo(value) {
      this.globalStudentInfo = value;
  }

  getGlobalStudentInfo() {
      return this.globalStudentInfo;
  }

  loadStudentInfo() {
    this.setGlobalStudentInfo({
      firstName: this.getFromStorageAsync('firstname'),
      lastName: this.getFromStorageAsync('lastname'),
      emailAddress: this.getFromStorageAsync('email'),
      phoneNumber: this.getFromStorageAsync('phone'),
      yearInSchool: this.getFromStorageAsync('year'),
      gender: this.getFromStorageAsync('gender'),
      registeredEvents: this.getFromStorageAsync('registeredevents')
    });
    console.log(this.globalStudentInfo);
  }

  saveStudentInfo(formStudentData) {
      if (this.globalStudentInfo == "") {
          formStudentData.registeredEvents = [0];
          this.insertNewStudentInfoInStorage(formStudentData);
      } else {
          formStudentData.registeredEvents = this.getGlobalStudentInfo().registeredEvents;
          this.updateStudentInfoInStorage(formStudentData);
      }

      this.loadStudentInfo();
  }

  insertNewStudentInfoInStorage(studentInfo) {
      this.updateStudentInfoInStorage(studentInfo);
  }

  updateStudentInfoInStorage(studentInfo) {
      this.setInStorage('firstname', studentInfo.firstName);
      this.setInStorage('lastname', studentInfo.lastName);
      this.setInStorage('email', studentInfo.emailAddress);
      this.setInStorage('phone', studentInfo.phoneNumber);
      this.setInStorage('year', studentInfo.yearInSchool);
      this.setInStorage('gender', studentInfo.gender);
      this.setInStorage('registeredevents', studentInfo.registeredEvents);
  }

  setupStudentInfoInStorage() {
     const studentInfo = {
      firstName: 'trav',
      lastName: 'johnson',
      emailAddress: 'email@email.com',
      phoneNumber: '123',
      yearInSchool: 'Senior',
      gender: 'Male',
      registeredEvents: 'blah,blah',
    };

     this.updateStudentInfoInStorage(studentInfo);
}

  clear() {
      this.storage.clear();
      // .then((data) => {
      //     console.log(JSON.stringify(data.res));
      // }, (error) => {
      //     console.log("ERROR -> " + JSON.stringify(error.err));
      // });

      this.setGlobalStudentInfo("");
  }

  appendEventID(eventID) {
      let eventArray = [];
      let student = this.getGlobalStudentInfo();
      eventArray = student.registeredEvents.split(",");
      eventArray.push(eventID);
      student.registeredEvents = eventArray;
      this.setGlobalStudentInfo(student);
      this.saveStudentInfoToStorage();
  }

  saveStudentInfoToStorage() {
      this.updateStudentInfoInStorage(this.globalStudentInfo);
      this.loadStudentInfo();
  }
}