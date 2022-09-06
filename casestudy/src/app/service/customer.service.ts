import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
API_URL = "http://localhost:8080/api/customers"
  constructor() { }

}
