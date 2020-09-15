import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/servicios';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) 
  { 
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

// convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login({'username':this.f.username.value, 'password':this.f.password.value})
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              this.router.navigate([this.returnUrl]);
            },
            error => {
              console.log(error);
                if(error.status==404){
                  this.error = "Usuario o contraseña incorrecto";
                }
                else{
                  this.error = "Error del servidor";
                }
                this.loading = false;
            });
  }
  back(){
    this.router.navigate(['']); 
  }


}
