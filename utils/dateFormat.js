const moment = require('moment');

function dateFormat(timestamp) {
    return moment(timestamp).format('MMM D, YYYY [at] hh:mm A');
}

module.exports = dateFormat;