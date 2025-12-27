import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username = '';
  password = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post('http://localhost:5000/api/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: () => {
          // ✅ VERY IMPORTANT LINE
          localStorage.setItem('loggedIn', 'true');

          this.message = 'Login successful!';

          // ✅ Redirect to dashboard
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        },
        error: () => {
          this.message = 'Invalid username or password';
        },
      });
  }
}
