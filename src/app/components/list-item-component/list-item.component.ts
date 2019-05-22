import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'list-item-component',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent {

  @Input() user: any;

  constructor(private router: Router) {}

  goToUser(userId: string) {
    this.router.navigate([`user/${userId}`]);
  }
}
