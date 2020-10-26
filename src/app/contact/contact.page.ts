import { Component, Injectable, OnInit } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage  {

  constructor(
    public badge: Badge,
  ) { }

    ionViewDidEnter(){
      setTimeout(() => {
        const $svg = $('app-contact svg').drawsvg();
        $svg.drawsvg('animate');
      }, 100);
    }

  upBadge(){
    this.badge.increase(1);
  }
  clearBadge(){
    this.badge.clear();
  }

}
