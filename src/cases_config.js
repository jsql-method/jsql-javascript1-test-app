var cases = {};
var host = 'http://localhost:18088';

/**
 * Creating JSQL object without config
 * @Expect Error
 */
cases['Config 1'] = function (callBack) {

    var status = 'FAILED';
    var start = new Date().getTime();

    try {
        var jsql = new JSQL();
    } catch (error) {
        if (error.message === 'JSQL: No configuration provided') {
            status = 'SUCCESS';
        }
    }

    var end = new Date().getTime();
    var duration = end - start;

    callBack(status, duration);

};

/**
 * Creating JSQL object with invalid host
 * @Expect Error
 */
cases['Host 1'] = function (callBack) {

    var status = 'FAILED';
    var start = new Date().getTime();

    try {
        var jsql = new JSQL({
            host: null
        });
    } catch (error) {
        if (error.message === 'JSQL: Invalid host') {
            status = 'SUCCESS';
        }
    }

    var end = new Date().getTime();
    var duration = end - start;

    callBack(status, duration);

};

/**
 * Creating JSQL object with invalid host
 * @Expect Error
 */
cases['Host 2'] = function (callBack) {

    var status = 'FAILED';
    var start = new Date().getTime();

    try {
        var jsql = new JSQL({
            host: ''
        });
    } catch (error) {
        if (error.message === 'JSQL: Invalid host') {
            status = 'SUCCESS';
        }
    }

    var end = new Date().getTime();
    var duration = end - start;

    callBack(status, duration);

};

/**
 * Creating JSQL object with invalid host
 * @Expect Error
 */
cases['Host 3'] = function (callBack) {

    var status = 'FAILED';
    var start = new Date().getTime();

    try {
        var jsql = new JSQL({
            host: new Date()
        });
    } catch (error) {
        if (error.message === 'JSQL: Invalid host') {
            status = 'SUCCESS';
        }
    }

    var end = new Date().getTime();
    var duration = end - start;

    callBack(status, duration);

};

/**
 * Creating JSQL object with valid host
 * @Expect Success
 */
cases['Host 4'] = function (callBack) {

    var status = 'SUCCESS';
    var start = new Date().getTime();

    try {
        var jsql = new JSQL({
            host: host
        });
    } catch (error) {
        console.error(error);
        status = 'FAILED';
    }

    var end = new Date().getTime();
    var duration = end - start;

    callBack(status, duration);

};