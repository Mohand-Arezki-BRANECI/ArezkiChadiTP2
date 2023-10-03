import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../Model/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    this.formDataSubject  = new BehaviorSubject<User|undefined>(undefined);
    this.formData$ = this.formDataSubject.asObservable();
  }
  private formDataSubject : BehaviorSubject<User|undefined>
  private formData$ : Observable<User|undefined>;

  setFormData(formData: User):void {
    let user : User = new User(formData.firstName, formData.lastName, formData.age, formData.email, formData.comment)
    this.formDataSubject.next(user);
  }

  public getDataObservable(): Observable<User|undefined> {
    return this.formData$;
  }
}
