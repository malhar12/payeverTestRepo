import { Component, OnInit } from '@angular/core';

import { UtilityService } from './../../services/utility.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  users: any[];
  total_pages: number;
  pages: number[]  = [];

  constructor(private utility: UtilityService) {
    this.users = [];
  }

  ngOnInit() {
    let prevPage = this.utility.getPageLinkStore();
    prevPage !== 1 ? this.loadData(prevPage, true): this.loadData(1, true);
  }

  loadData(pageNo: number, firstLoad?: boolean) : any {
    this.utility.getAllUsers(pageNo)
          .subscribe(res => {
            this.users = res.data;
            this.utility.setPageLinkStore(pageNo);
            if(firstLoad) {
              this.total_pages = res.total_pages;
              for(let i =0; i <  this.total_pages;i++) {
                this.pages.push(i+1);
              }
            }
          });
  }

  goToPage(event, pageLink: number){
    // TODO:
    /*
     * clear old users data
     * get new data and display it on screen
    */
    event.preventDefault();
    this.users.length = 0;
    this.loadData(pageLink);
  }
}
