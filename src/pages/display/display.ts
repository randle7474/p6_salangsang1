import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  public data: any = {myToggle: true};

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  showToast() {

      let toast = this.toastCtrl.create({
          message: 'Order was added successfully',
          duration: 3000,
          position: 'middle'

    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();

  }
  onLogOut() {
    localStorage.setItem("isLogin", "false");
}

}


