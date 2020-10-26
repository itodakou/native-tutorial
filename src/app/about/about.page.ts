import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  shootPhoto: string;

  constructor(
    private camera: Camera,
    public toastController: ToastController,

  ) { }

  ngOnInit() {
  }
  savePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.shootPhoto = 'data:image/jpeg;base64,' + imageData;
      console.log('PictureTaken', this.shootPhoto);
      this.presentToast(this.shootPhoto);
    }, (err) => {});
  }
  async presentToast(ms: string) {
    const toast = await this.toastController.create({
      message: ms,
      duration: 2000
    });
    toast.present();
  }
}
