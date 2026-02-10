import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  user_os_device: string = '';

  constructor(private platform: Platform) {
  }

  ngOnInit() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.user_os_device = 'mobile';
    } else {
      this.user_os_device = 'desktop';
    }
  }
}