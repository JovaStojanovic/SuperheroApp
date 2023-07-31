import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   registerForm: FormGroup= new FormGroup({
     name: new FormControl('Jovan'),
     surname: new FormControl(null),
     email: new FormControl(null),
     password: new FormControl(null)
   });
  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      //prvi argument u konstruktoru za formcontrol je default vrednost, drugi argument je validator
      name: new FormControl('Jovan', Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(7)])
    });
  }

  onRegister(){
    console.log(this.registerForm)
  }
}
