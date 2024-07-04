import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) { }

  registerUser(userDetails: User) {
    return this._http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this._http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }


}
