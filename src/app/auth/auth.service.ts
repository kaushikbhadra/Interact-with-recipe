import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsYVC0hyRFaLFN3Nz-OiLUr9F4C2o0GmI',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandler));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsYVC0hyRFaLFN3Nz-OiLUr9F4C2o0GmI',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(errhandle: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!';
    if (!errhandle.error || !errhandle.error.error) {
      return throwError(() => errorMessage);
    }
    switch (errhandle.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Unknown username and password';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Unknown username and password';
        break;
    }
    return throwError(() => errorMessage);
  }
}
