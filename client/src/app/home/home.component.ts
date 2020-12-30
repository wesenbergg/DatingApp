import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean;
  users: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRegisterMode(): void {
    this.registerMode = !this.registerMode;
  }


  cancelRegistrationMode(event: boolean) {
    this.registerMode = event;
  }

}
