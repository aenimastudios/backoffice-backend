const joi = require('@hapi/joi');
const db = require('../db/db.js');

const inSchema = joi.object({
    terminalId: joi.number().integer().required(),
    date: joi.date().required(),
    value: joi.number().required()
});

const outSchema = joi.object({
    terminalId: joi.number().integer(),
    issueDate: joi.date().required(),
    expDate: joi.date().required(),
    value: joi.number().required(),
});

const cashSchema = joi.array().items(
        joi.object({
            date: joi.date().required(),
            value: joi.number().required(),
            terminalId: joi.number().integer().required(),
            type: joi.number().integer().required()
    })
); 

const inOp = async body => {
    const {value, error} = inSchema.validate(body);
    if(error) throw "ERROR";

    return await db.saveInOperation(value);
};

const outOp = async body => {
    const {value, error} = outSchema.validate(body);
    if(error) throw "ERROR";;

    return await db.saveOutOperation(value);
};

const cashOp = async body => {
    const {value, error} = cashSchema.validate(body);
    if(error) throw "ERROR";

    return await db.saveCashOp(value);
};

module.exports = {
    inOp,
    outOp,
    cashOp
};
