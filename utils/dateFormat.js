// dateFormat is a function that takes in a timestamp and returns a string with the date formatted as follows: 3/26/2021, 9:43:37 AM. This function is used in both models to format the createdAt date before it's sent to the client.
function dateFormat(timestamp) {
    return moment(timestamp).format('MMM D, YYYY [at] hh:mm A');
}

module.exports = dateFormat;