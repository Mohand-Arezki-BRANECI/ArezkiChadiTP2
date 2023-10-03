import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../Model/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private formDataSubject : BehaviorSubject<User> = new BehaviorSubject<any>(null);
  formData$ : Observable<User> = this.formDataSubject.asObservable();

  setFormData(formData: User):void {
    let user : User = new User(formData.firstName, formData.lastName, formData.age, formData.email, formData.comment)
    this.formDataSubject.next(user);
  }
}
