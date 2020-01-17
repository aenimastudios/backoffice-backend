const handler = require('./dataHandler.js');
const db = require('../db/db.js');

const terminalId = 666;
const date = new Date().toISOString().slice(0, 19).replace('T', ' ');


test('inOperation saves to database', async () => {
    const data = {
        terminalId,
        date,
        value: 123
    }

    console.log(data);

    const res = await handler.inOp(data);

    expect(res).toEqual(expect.any(Array));
    expect(res).toHaveLength(1);
    expect(res[0]).toEqual(expect.any(Number));
});

test('inOperation saves to database', async () => {
    const data = {
        terminalId,
        issueDate: date,
        expDate: date,
        value: 321
    }

    console.log(data);

    const res = await handler.outOp(data);

    expect(res).toEqual(expect.any(Array));
    expect(res).toHaveLength(1);
    expect(res[0]).toEqual(expect.any(Number));
});

test('cashOperation saves to database', async () => {
    const data = [{
        date,
        value: 432,
        terminalId,
        type: 1
    }];

    console.log(data);

    const res = await handler.cashOp(data);

    expect(res).toEqual(expect.any(Array));
    expect(res).toHaveLength(1);
    expect(res[0]).toEqual(expect.any(Number));
});

afterAll(() => {
    db.exit();
})

