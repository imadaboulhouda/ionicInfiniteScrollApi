import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  link="https://randomuser.me/api/?results=10";
  constructor(public http: HttpClient) {
    
  }

  fetchData(page)
  {
    return this.http.get(this.link+"&page="+page);
  }

}
