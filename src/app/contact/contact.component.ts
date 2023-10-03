import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
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
    const isSubmitted = form && form.submitted;
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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  protected readonly auto = auto;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required]],
    });
  }

  protected get firstNameControl() {
    return this.formGroup.get('firstName');
  }

  protected get lastNameControl() {
    return this.formGroup.get('lastName');
  }

  protected get ageControl() {
    return this.formGroup.get('age');
  }


  protected get commentControl() {
    return this.formGroup.get('comment');
  }

  protected get isFormValid() {
    return this.formGroup.valid;
  }

  isEmailVisible = true;

  // Your existing code for emailFormControl and matcher...

  // Function to toggle email validation based on checkbox state
  protected toggleEmailValidation() {
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
  protected addEmailValidators() {
    // Add your email validation logic here
    this.formGroup.controls["email"].setValidators(Validators.required);
    this.formGroup.controls["email"].updateValueAndValidity();
  }

  // Function to remove email validators
  protected removeEmailValidators() {
    // Remove any existing validation logic
    this.formGroup.controls["email"].clearValidators();
    this.formGroup.controls["email"].updateValueAndValidity();
  }

  onSubmit() {
    // Check if the form is valid
    if (this.formGroup.valid) {
      // Retrieve form data and log to the console
      const formData = this.formGroup.value;
      console.log('Form data:', formData);

      // Show an alert indicating that the form is valid
      alert('Form is valid');
      this.dataService.setFormData(formData);
      this.router.navigate(['/home']);
    } else {
      // If the form is not valid, mark all fields as touched to display error messages
      this.formGroup.markAllAsTouched();
    }
  }
}
