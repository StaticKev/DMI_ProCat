import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { RouterLink } from '@angular/router';
// IMPORT ICON BARU
import { addIcons } from 'ionicons';
import { 
  mailOutline, 
  lockClosedOutline, 
  personOutline, 
  homeOutline, 
  idCardOutline, 
  locationOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class RegisterPage implements OnInit {
  user_os_device: string = 'desktop';

  constructor(private platform: Platform) {
    // DAFTARKAN SEMUA ICON DI SINI
    addIcons({ 
      mailOutline, 
      lockClosedOutline, 
      personOutline, 
      homeOutline, 
      idCardOutline, 
      locationOutline 
    });
  }

  ngOnInit() {
    if (this.platform.is('android') || this.platform.is('ios') || this.platform.is('mobile') || this.platform.is('mobileweb')) {
      this.user_os_device = 'mobile';
    } else {
      this.user_os_device = 'desktop';
    }
  }
}