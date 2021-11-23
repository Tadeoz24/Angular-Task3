import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  userId: string = '';
  userDetails: any;
  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data) => {
      this.userId = data['id'];
    });
    this.userService.viewuser(this.userId).subscribe((data) => {
      this.userDetails = data;
    });
  }
}
