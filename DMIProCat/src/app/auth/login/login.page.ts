import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class LoginPage implements OnInit {
  user_os_device: string = 'desktop'; // Default ke desktop

  constructor(private platform: Platform) {
    // WAJIB: Daftarkan icon di sini agar terbaca oleh HTML
    addIcons({ mailOutline, lockClosedOutline });
  }

  ngOnInit() {
    // Cek apakah device adalah mobile (Android/iOS/iPad/iPhone)
    if (
      this.platform.is('android') ||
      this.platform.is('ios') ||
      this.platform.is('mobile')
    ) {
      this.user_os_device = 'mobile';
    } else {
      this.user_os_device = 'desktop';
    }

    // Debugging: Cek di console browser apa yang terdeteksi
    console.log('Detected Device OS:', this.user_os_device);
  }
}
