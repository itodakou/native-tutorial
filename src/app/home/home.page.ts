import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public socialShare: SocialSharing,
    ) { }

  ngOnInit() {
  }

  showFacebook(){
    console.log('FaceebookShared');
    this.socialShare.shareViaFacebook('シェアする文章');
  }
}
