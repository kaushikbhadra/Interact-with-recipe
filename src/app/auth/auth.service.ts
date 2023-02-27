import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsYVC0hyRFaLFN3Nz-OiLUr9F4C2o0GmI',
      {
        email,
        password,
        returnSecureToken: true,
      }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'Unknown error occurred!'
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(() => errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email is exists already';
      }
      return throwError(() => errorMessage);
    }));
  }
}
