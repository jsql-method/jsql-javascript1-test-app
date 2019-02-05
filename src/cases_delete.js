
/**
 * Deleting SQL
 * @Expect Success
 */
cases['Delete 1'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.remove("delete from person where age = 30")
            .then(function (result) {
                console.log('delete 1',result);
                resultCallback('SUCCESS');
            })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            })

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};


cases['Delete 2 niepoprawne zapytanie'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.remove("delete from trees where hight = 10")
            .then(function (result) {
                console.log('delete 2',result);
                if(result.code === 400 && result.description === 'ERROR: relation "trees" does not exist'){
                    resultCallback('SUCCESS');
                }else{
                    resultCallback('FAILED');
                }
            })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            })

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};


cases['Delete 3 puste zapytanie'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.remove("")
            .then(function (result) {
                console.log('delete 3',result);
                resultCallback('SUCCESS');
            })
            .catch(function (error) {
                console.error(error);
                resultCallback('success');
            })

    } catch (error) {
        console.error(error);
        resultCallback('success');
    }


};



cases['Delete 4 niepoprawna skladnia zapytania'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.remove("delete person frddsasa sesaaslect sedsare age > :age")
            .then(function (result) {
                console.log('delete 4',result);
                if(result.code === 400 && result.description === 'ERROR: syntax error at or near "person"'){
                    resultCallback('SUCCESS');
                }else{
                    resultCallback('FAILED');
                }

            })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            })

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};

cases['Delete 5'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.set ('deletePerson', "delete from person where age = 30");

        var delete5 = jsql.get('deletePerson');

        console.log('delete5',delete5);

        jsql.remove(delete5).then(function (result) {
            console.log(result);
            resultCallback('SUCCESS');
        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};

cases['Delete 6 nieistniejąca tabela'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.repo()
            .namedQuery('deletetrees', 'delete from trees where hight = 10');

        var delete6 = jsql.get('deletetrees');

        console.log('delete6',delete6);

        jsql.remove(delete6).then(function (result) {
            console.log('delete6',result);
            if(result.code === 400 && result.description === 'ERROR: relation "trees" does not exist'){
                resultCallback('SUCCESS');
            }else{
                resultCallback('FAILED');
            }
        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};

cases['Delete 8 niepoprawna skladnia zapytania'] =  function (callBack) {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        callBack(status, duration);
    };

    try {

        var jsql = new JSQL({
            host: host
        });

        jsql.set('deleteperson', 'delete person frddsasa sesaaslect sedsare age > :age');

        var delete8 = jsql.get('deleteperson');

        console.log('delete8',delete8);

        jsql.remove(delete8).then(function (result) {
            console.log('delete8',result);
            if(result.code === 400 && result.description === 'ERROR: syntax error at or near "person"'){
                resultCallback('SUCCESS');
            }else{
                resultCallback('FAILED');
            }

        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

    } catch (error) {
        console.error(error);
        resultCallback('FAILED');
    }


};