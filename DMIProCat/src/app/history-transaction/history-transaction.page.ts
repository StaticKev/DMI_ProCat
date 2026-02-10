import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.page.html',
  styleUrls: ['./history-transaction.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoryTransactionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
