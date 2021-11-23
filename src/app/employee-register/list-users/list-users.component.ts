import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }
  employeeList: any;
  page: any;
  maxSize = 9;

  public config: any = {
    id: 'advanced',
    itemsPerPage: 4,
    currentPage: 1,
  };
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;
  listUsers: User[] = [];
  students$: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((data) => {
      this.listUsers = data;
    });
  }
}
