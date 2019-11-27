import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

export interface AlertMessage {
  prefix: string;
  message: string;
  color: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class GbAlertsService {
  public alertMessage$ = new Subject<AlertMessage>();

  public createSuccessAlert(message: string): void {
    this.alertMessage$.next(
      this.createAlertMessage('Success', message, 'green', 'fas fa-check fa-xs')
    );
  }

  public createDangerAlert(message: string): void {
    this.alertMessage$.next(
      this.createAlertMessage('Danger', message, 'red', 'fas fa-times fa-xs')
    );
  }

  public createWarningAlert(message: string): void {
    this.alertMessage$.next(
      this.createAlertMessage('Warning', message, 'darkorange', 'fas fa-exclamation fa-xs')
    );
  }

  public createInfoAlert(message: string): void {
    this.alertMessage$.next(
      this.createAlertMessage('Info', message, 'dodgerblue', 'fas fa-info fa-xs')
    );
  }

  private createAlertMessage(prefix: string, message: string, color: string, icon: string): AlertMessage {
    return { prefix, message, color, icon };
  }
}
