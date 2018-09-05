import { Component, OnInit } from '@angular/core';
import { Employee } from '../../myclass/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  empl: Employee[] = [
    {
      id: 1,
      name: 'Abcd',
      gender: 'male',
      email: 'abcd@gmail.com',
      phone: 9875641232,
      address: 'pl No:1 first street, third avenvue, pondicherry-4',
      DoB: new Date(7-6-1990),
      dept: 'Angular',
      isActive: true,
      photoPath: 'assets/avatar-male.jpg'
    },
    {
      id: 2,
      name: 'Efgh',
      gender: 'Female',
      email: 'efgh@gmail.com',
      phone: 9825871232,
      address: 'pl No:1 first street, third avenvue, pondicherry-4',
      DoB: new Date(22 - 6 - 1991),
      dept: '.Net',
      isActive: true,
      photoPath: 'assets/Female-avatar.png'
    },
    {
      id: 3,
      name: 'Hijk',
      gender: 'Female',
      email: 'hijk@gmail.com',
      phone: 8865641232,
      address: 'pl No:1 first street, third avenvue, pondicherry-4',
      DoB: new Date(5 - 9 - 1992),
      dept: 'Designer',
      isActive: false,
      photoPath: 'assets/Female-avatar.png'
    }

  ];


}
