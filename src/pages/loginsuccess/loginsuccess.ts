import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {User} from "../../models/user";

/**
 * Generated class for the LoginsuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-loginsuccess',
  templateUrl: 'loginsuccess.html',
})
export class LoginsuccessPage {

  loggedInUser: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
    console.log(navParams);
    this.loggedInUser = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginsuccessPage');
  }


  public logout() {
    this.viewCtrl.dismiss({
      outputMsg:"Goodbye " + this.loggedInUser.username
    })
    //this.navCtrl.pop();
  }
}
