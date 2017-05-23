import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {LoginsuccessPage} from "../loginsuccess/loginsuccess";
import {User} from "../../models/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User;
  //username: any;
  //password: any;
  goodbyeMsg: string;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    this.user = new User();
  }

  public login() {

    console.log('userName: ', this.user);

    let modalPage = this.modalCtrl.create(LoginsuccessPage, {user: this.user});
    modalPage.present().then(() => {
      this.goodbyeMsg = '';
    });
    modalPage.onDidDismiss((data) => {
        this.user.clean();
        this.goodbyeMsg = data.outputMsg;
      }
    )
    //this.navCtrl.push(LoginsuccessPage, {username: this.username});

  }

/*  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.user.clean();

  }*/

}
