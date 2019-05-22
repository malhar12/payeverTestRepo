import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../../services/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  user: any;
  userId: string;

  constructor(private utility: UtilityService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.utility.getUser(this.userId)
            .subscribe(res => {
              this.user = res.data;
            });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
