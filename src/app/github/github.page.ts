import { Component, OnInit } from '@angular/core';

import { DatalistingService } from '../datalisting.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss']
})
export class GithubPage implements OnInit {
  loading = false;
  customLoading;
  repos = [];
  constructor(
    private datalistingService: DatalistingService,
    private loadingController: LoadingController
  ) {}
  githubname;
  ngOnInit() {}

  search() {
    this.getGithubRepos(this.githubname);
  }

  valueChange(e) {
    console.log('valueChange', e);
  }

  getGithubRepos(name) {
    this.loading = true;
    this.repos.length = 0;
    // this.presentLoadingWithOptions();
    console.log('get');
    this.datalistingService.getGithubRepos(name).subscribe(
      data => {
        this.loading = false;
        this.repos = data;
        console.log('data', data);
        // this.customLoading.dismiss();
      },
      error => {
        this.loading = false;
        this.repos.length = 0;
        console.log('error', error);
      }
    );
  }

  async presentLoadingWithOptions() {
    this.customLoading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.customLoading.present();
  }
}
