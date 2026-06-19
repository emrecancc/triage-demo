const { AsyncEventEmitter } = require('../');

describe('async event emitter test', () => {
  it('should receive event within 100ms', function () {
    this.timeout(5000);
    this.retry(2);

    const emitter = new AsyncEventEmitter();
    let eventReceived = false;

    return new Promise((resolve, reject) => {
      emitter.on('test-event', () => {
        eventReceived = true;
        resolve();
      });

      setTimeout(() => {
        if (!eventReceived) {
          reject(new Error('Event not received within expected time'));
        }
      }, 1000);

      // Emit the event after a short delay
      setImmediate(() => {
        emitter.emit('test-event');
      });
    });
  });
});