import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }
  GetTodos() {
    return this.http.get('/mocks/alltodos');
  }
  GetDone() {
    return this.http.get('/mocks/Done');
  }
  GetInprogress() {
    return this.http.get('/mocks/Inprogress');
  }
}
