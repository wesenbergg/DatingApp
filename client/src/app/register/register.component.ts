import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registrationCancel = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.accountService.register(this.model).subscribe(
      res => {
        console.log(res);
        this.cancel();
      }, err => {
        console.log(err);
      })
  }

  cancel(): void {
    this.registrationCancel.emit(false);
  }

}
