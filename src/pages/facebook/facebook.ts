import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '../../model/facebook';
import { FacebookService } from '../../service/facebook.service';

/**
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {

  facebook: Facebook[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public FacebookService : FacebookService) {
  }

  ionViewDidLoad(){
    this.FacebookService.getFacebook()
    .subscribe(response => {
      this.facebook = response;
      console.log(this.facebook);
    });
  }
  navPostDetalhe(facebook : Facebook){
    this.navCtrl.push("PostDetalhePage",{facebook : facebook});
  }
}
