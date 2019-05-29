import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  page=1;
  data  = [];
  constructor(public navCtrl: NavController,private fetch:UsersProvider) {
    this.loadUsers();
  }

  loadUsers(inf?)
  {
    this.fetch.fetchData(this.page) .subscribe(res=>{
      console.log(res);
      this.data = this.data.concat(res['results']);
      if(inf)
      {
        inf.complete();
      }
    });
  }

  loadMore(inf)
  {
    this.page++;
    this.loadUsers(inf);

    if(this.page == 4)
     inf.enable(false);

  }

}
