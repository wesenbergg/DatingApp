import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private accountService: AccountsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.accountService.register(this.model).subscribe(
      res => {
        console.log(res);
        this.cancel();
      }, err => {
        console.log(err);
        this.toastr.error(err.error);
      })
  }

  cancel(): void {
    this.registrationCancel.emit(false);
  }

}
