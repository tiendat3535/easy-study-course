import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) { }

  public onClick(): void {
    this.http.get<User>("http://localhost:9000/private/users").subscribe(result => {
      alert(result['username'] + " " + result['password']);
    });
  }

}

class User {
  username: string;
  password: string;
}
