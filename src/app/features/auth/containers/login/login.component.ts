import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShown="password"
  hidden=true
  constructor() { }

  ngOnInit(): void {
  }

  hidePassword(){
    this.hidden=!this.hidden
    !this.hidden ? this.isShown="text" : this.isShown="password"
  }

}
