import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() {}

  public cantBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value.trim().toLowerCase();
    return value === 'strider' ? { noStrider: true } : null;
  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }
  public isFieldEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(fieldOne)?.value;
      const value2 = formGroup.get(fieldTwo)?.value;

      if (value1 !== value2) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }
      formGroup.get(fieldTwo)?.setErrors(null);

      return null;
    };
  }
}
