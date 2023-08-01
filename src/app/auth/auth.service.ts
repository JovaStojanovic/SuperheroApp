import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

export interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserAuthenticated = false;
  constructor(private http: HttpClient) { }

  get isUserAuthenticated(){
    return this._isUserAuthenticated;
  }

  register(user: UserData) {
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey
        }`,
        {email: user.email, password: user.password, returnSecureToken: true}
    );
  }
  login(user: UserData){
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey
        }`,
        {email: user.email, password: user.password, returnSecureToken: true}
    );
  }

  logout(){
    this._isUserAuthenticated = false;
  }
}
