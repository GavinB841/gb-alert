import { TestScheduler } from 'rxjs/testing';
import {GbAlertsService} from './gb-alerts.service';

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
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Success', message, color: 'green' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Danger', message, color: 'red' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a warning message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a info message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue' };

    alertMsg.createSuccessAlert(message);
    scheduler.expectObservable(alertMsg.alertMessage$).toBe('a', { a: expectedMessage });
  });
});
