import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registrationCancel = new EventEmitter();
  model: any = {};
  registrationForm: FormGroup;
  maxDate: Date;

  constructor(private fb: FormBuilder,
    private accountService: AccountsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      gender: ['male'],
      userName: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
  }

  matchValues(matchTo: string) {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ?
        null : { matching: true }
    }
  }

  register(): void {
    // this.accountService.register(this.model).subscribe(
    //   res => {
    //     console.log(res);
    //     this.cancel();
    //   }, err => {
    //     console.log(err);
    //     this.toastr.error(err.error);
    //   })
  }

  cancel(): void {
    this.registrationCancel.emit(false);
  }

}
