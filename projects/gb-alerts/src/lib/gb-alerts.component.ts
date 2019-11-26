import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { AlertMessage, GbAlertsService } from './gb-alerts.service';

@Component({
  selector: 'gb-alerts',
  template: `
      <div
              class="alert"
              *ngIf="alertMessage$ | async as alertMessage"
              [ngStyle]="{ background: alertMessage.color }"
      >
          <span class="closebtn" (click)="closeAlert()">&times;</span>
          <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
      </div>
  `,
  styles: []
})
export class GbAlertsComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private gbNotificationService: GbAlertsService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.gbNotificationService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }

}
