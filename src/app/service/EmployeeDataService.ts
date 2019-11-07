import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPLOYEE_JPA_API_URL, AWS_EMPLOYEE_JPA_API_URL } from 'src/app/app.constants';
import { Employee } from '../list-employees/list-employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllEmployees() {
    return this.http.get<Employee[]>(`${AWS_EMPLOYEE_JPA_API_URL}/employees/`);
  }

  retrieveEmployee(id) {
    console.log('Retrieving Employee...');
    return this.http.get<Employee>(`${AWS_EMPLOYEE_JPA_API_URL}/employees/${id}`);
  }

  retrieveLuckyEmployee() {
    console.log('Retrieving Lucky Employee...');
    return this.http.get<Employee>(`${AWS_EMPLOYEE_JPA_API_URL}/employees/luckyemployee`);
  }

  createEmployee(employee) {
    return this.http.post(`${AWS_EMPLOYEE_JPA_API_URL}/employees/`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(`${AWS_EMPLOYEE_JPA_API_URL}/employees/${id}`);
  }

}
