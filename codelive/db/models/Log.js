const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
    {
        requestedAmount: { type: Number, required: true },
        ipAddress: { type: String, required: false }
    },
    {
        timestamps: true,
        collection: 'someTable' 
    }
);

const Log = mongoose.model('Logs', logSchema);
module.exports = Log;