import { TestScheduler } from 'rxjs/testing';
import { GbAlertsService } from './gb-alerts.service';

describe('GbNotificationsService', () => {
  let alertMsg: GbAlertsService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    alertMsg = new GbAlertsService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a success message', () => {
    const message = 'This is an success alert';
    const expectedMessage = { prefix: 'Success', message, color: 'green', icon: 'fas fa-check fa-xs' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'This is an danger alert';
    const expectedMessage = { prefix: 'Danger', message, color: 'red', icon: 'fas fa-times fa-xs' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a warning message', () => {
    const message = 'This is a warning alert';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange', icon: 'fas fa-exclamation fa-xs'};

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a info message', () => {
    const message = 'This is an information alert';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue', icon: 'fas fa-info fa-xs' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });
});
