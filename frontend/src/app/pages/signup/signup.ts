import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  username = '';
  password = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    this.http
      .post('http://localhost:5000/api/signup', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: () => {
          this.message = 'Signup successful!';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        },
        error: () => {
          this.message = 'Signup failed. User may already exist.';
        },
      });
  }
}
