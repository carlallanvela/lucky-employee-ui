import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../service/EmployeeDataService';

export class Employee {
  constructor(
    public id: number,
    public employeeName: string,
    public lastErrandDate: Date,
    public present: string,
    public lucky: string
  ) {}
}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees = [];
  message: string;

  constructor(
    private employeeDataService: EmployeeDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshEmployees();
  }

  refreshEmployees() {
    this.employeeDataService.retrieveAllEmployees().subscribe(
      response => {
        console.log(response);
        this.employees = response;
      }
    );
  }

  addEmployee() {
    this.router.navigate(['add-employee', -1]);
  }

  updateEmployee(id) {
    this.router.navigate(['add-employee', id]);
  }

  deleteEmployee(id) {
    this.employeeDataService.deleteEmployee(id).subscribe(
      response => {
        console.log(`delete Employee ${id}`);
        this.message = `Delete of Employee ${id} Successful!`;
        this.refreshEmployees();
      }
    )
  }

  retrieveLuckyEmployee() {
    this.employeeDataService.retrieveLuckyEmployee().subscribe(
      response => {
        console.log(response);
        this.refreshEmployees();
      }
    )
  }
}
