import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Hapus class dark jika ada
    document.body.classList.remove('dark');
    // Optional, tambahkan class light
    document.body.classList.add('light');
  }
}
