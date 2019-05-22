import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilityService {

  pageLinkStore: number = 1;

  constructor(private http: HttpClient) {}

  setPageLinkStore(pageLink): void {
    this.pageLinkStore = pageLink;
  }

  getPageLinkStore(): number {
    return this.pageLinkStore;
  }

  getAllUsers(pageNo: number) : any {
    return this.http.get(`https://reqres.in/api/users?page=${pageNo}`);
  }

  getUser(userId: string): any {
    return this.http.get(`https://reqres.in/api/users/${userId}`);
  }
}
