import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.customValidators.firstNameAndLastnamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.customValidators.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.customValidators.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.customValidators.isFieldEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private customValidators: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField(field: string) {
    // TODO: Obtener validacion desde un servcio
    return this.customValidators.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
