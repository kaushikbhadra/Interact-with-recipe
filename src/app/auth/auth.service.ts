import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user/user.model';

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
  user = new Subject<User>();
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
      .pipe(
        catchError(this.errorHandler),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
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
      .pipe(
        catchError(this.errorHandler),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn + 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
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
