import {Component} from '@angular/core';
import {DataService} from "../../Services/data.service";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule, FormGroup, FormBuilder,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {auto} from "@popperjs/core";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted : boolean|null = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatCheckboxModule, MatAutocompleteModule],
})
export class ContactComponent {
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher : MyErrorStateMatcher = new MyErrorStateMatcher();
  protected readonly auto : "auto" = auto;
  formGroup: FormGroup;
  isEmailVisible : boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: [''],
      comment: ['', [Validators.required]],
    });
  }

  protected get firstNameControl() {
    return this.formGroup.get('firstName');
  }
  protected get lastNameControl() {
    return this.formGroup.get('lastName');
  }
  protected get commentControl() {
    return this.formGroup.get('comment');
  }
  protected get isFormValid() {
    return this.formGroup.valid;
  }

  // Function to toggle email validation based on checkbox state
  protected toggleEmailValidation() : void {
    if (this.isEmailVisible) {
      // If the checkbox is checked, hide the email field and remove validators
      this.isEmailVisible = false;
      this.removeEmailValidators();
    } else {
      // If the checkbox is unchecked, show the email field and add validators
      this.isEmailVisible = true;
      this.addEmailValidators();
    }
  }

  // Function to add email validators
  private addEmailValidators() : void {
    // Add your email validation logic here
    this.formGroup.controls["email"].setValidators(Validators.required);
    this.formGroup.controls["email"].updateValueAndValidity();
  }

  // Function to remove email validators
  private removeEmailValidators():void {
    // Remove any existing validation logic
    this.formGroup.controls["email"].clearValidators();
    this.formGroup.controls["email"].updateValueAndValidity();
  }

  protected onSubmit() : void {
    // Check if the form is valid
    if (this.formGroup.valid) {
      // Retrieve form data and log to the console
      const formData = this.formGroup.value;
      alert('Form is valid');
      this.dataService.setFormData(formData);
      this.router.navigate(['/home']);
    } else {
      // If the form is not valid, mark all fields as touched to display error messages
      this.formGroup.markAllAsTouched();
    }
  }
}
