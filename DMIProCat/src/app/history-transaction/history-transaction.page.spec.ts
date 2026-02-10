import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryTransactionPage } from './history-transaction.page';

describe('HistoryTransactionPage', () => {
  let component: HistoryTransactionPage;
  let fixture: ComponentFixture<HistoryTransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
