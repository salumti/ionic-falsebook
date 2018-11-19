import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '../../model/facebook';

/**
 * Generated class for the PostDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detalhe',
  templateUrl: 'post-detalhe.html',
})
export class PostDetalhePage {
  facebook : Facebook;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.facebook = this.navParams.get('facebook');
  }
}
