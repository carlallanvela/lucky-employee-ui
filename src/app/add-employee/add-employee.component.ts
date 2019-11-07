import { Component, OnInit } from '@angular/core';
import { Employee } from '../list-employees/list-employees.component';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { EmployeeDataService } from '../service/EmployeeDataService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private employeeDataService: EmployeeDataService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.employee = new Employee(this.id, '', new Date(), '', '');
    if (this.id != -1) {
      this.employeeDataService.retrieveEmployee(this.id)
      .subscribe(
        data => this.employee = data
      );
    }
  }

  saveEmployee() {
    this.employeeDataService.createEmployee(this.employee)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
