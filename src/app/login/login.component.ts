import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = { Email: '', Password: '' };
  constructor(private DS: DataserviceService, private router: Router) {}
  login = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Epwd: new FormControl('', [Validators.required]),
  });
  Onsubmit() {
    console.log(this.user);
    this.DS.authuser(this.user).subscribe({
      next: (data) => {
        if (data) {
          alert('login successful');
            this.router.navigate(['/quiz']);
        }
      },
      error: (err) => {
        if (err) {
          alert('login failed');
           (this.user = { Email: '', Password: '' });
        }
      },
    });
  }
}
