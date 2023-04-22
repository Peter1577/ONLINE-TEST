import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { PasswordMatch } from '../validators/passwordvalidation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private DS:DataserviceService){}
signup = new FormGroup({
  Fname : new FormControl('',[Validators.required]),
  Lname : new FormControl('',[Validators.required]),
  Email : new FormControl('',[Validators.required,Validators.email]),
  Epwd : new FormControl('',[Validators.required,Validators.minLength(8)]),
  Password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  
},    [PasswordMatch('Epwd','Password')]);

get Fname(){
 return  this.signup.get('Fname');
}
get Lname(){
  return this.signup.get('Lname');
}
get Email(){
  return this.signup.get('Email');
}
 get Password(){
  return this.signup.get('Password');
 }
get Epwd (){
  return this.signup.get('Epwd');
 }

submit(){
  this.DS.postuserinfo(this.signup.value).subscribe(data=>alert("registration sucessful"),
  )
  console.table(this.signup.value)
}
myimage:string ="assests/images/pxfuel.jpg";
}
