const assert = require('assert');

const opsLimiter = require('../../src/opsLimiter')();

describe('Operations limiter', () => {
  it('should execute all operations', async () => {
    let triggerCount = 0;
    const triggerFn = async () => { triggerCount += 1; };

    opsLimiter.queue.push(triggerFn, triggerFn, triggerFn);

    await opsLimiter.exec(1);

    assert.equal(opsLimiter.queue.length, 0);
    assert.equal(triggerCount, 3);
  });
});
