import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../Model/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  setFormData(formData: User) {
    let user = new User(formData.firstName, formData.lastName, formData.age, formData.email, formData.comment)
    this.formDataSubject.next(user);
  }
}
