const requestIp = require('request-ip');

const storeLogs = async (requestedAmount, ipAddress) => {
    const Log = require('../db/models/Log');
    const newLog = new Log({
        requestedAmount, ipAddress
    });
    await newLog.save();
};

const index = (req, res) => {
    const {num} = req.params;
    const x = Number.parseInt(num);
    const ip = requestIp.getClientIp(req);
    if(isNaN(x)) {
        storeLogs(0, ip);
        res.status(400).send({ message: 'Not a number' });
    } else {
        storeLogs(x, ip);
        if(num > 100000) {
            res.status(400).send({ message: 'Number too large' });
            return;
        }
        const result = [];
        for( let i = 1; i < (x+1); i++) {
            let current = '';
            if(i % 3 === 0) {
                current = 'Big';
            }
            if(i % 5 === 0) {
                current += 'Bang';
            }
            if(i % 7 === 0) {
                current += 'Theory';
            }
            if(current === '') {
                current = i;
            }
            result.push(current);
        }
        res.status(200).send({data: result, amount: x});
    }
}

module.exports = index;