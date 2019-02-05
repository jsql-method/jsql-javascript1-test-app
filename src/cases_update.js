
/**
 * Updating SQL
 * @Expect Success
 */
cases['Update 1 z parametrami'] =  function (callBack) {

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

        jsql.update("update person set age = 40 where age > :age")
            .param('age', 30)
            .then(function (result) {
                console.log('update 1', result);
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


cases['Update 2'] =  function (callBack) {

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

        jsql.update("update person set age = 40")
            .then(function (result) {
                console.log('update 2', result);
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


cases['Update 3 niepoprawne zapytanie'] =  function (callBack) {

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

        jsql.update("update ludzie set wiek = 40")
            .then(function (result) {
                console.log('update 3', result);
                if(result.code === 400 && result.description === 'ERROR: relation "ludzie" does not exist'){
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


cases['Update 4 niepoprawna skladnia zapytana'] =  function (callBack) {

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

        jsql.update("update person frddsasa sesaaslect sedsare age > :age").then(function (result) {
            console.log('update 4', result);
            if(result.code === 400 && result.description === 'ERROR: syntax error at or near "sesaaslect"'){
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

cases['Update 5 uzycie repos z parametrami '] =  function (callBack) {

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

        jsql.repo ()
            .namedQuery('updateperson', 'update person set age = 40 where age > :age');

        var update5 = jsql.get('updateperson');

        console.log('update5',update5);

        jsql.update(update5).param('age', 30).then(function (result) {
            console.log('update5',result);
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

cases['Update 6 uzycie repos z parametrami '] =  function (callBack) {

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

        jsql.set('updatePersonAge', function(age) {
            var query = jsql.query('update person set age = 40');

            if(age){
                query.append('where age > :age');
            }

            return query;

        });

        var update6 = jsql.get('updatePersonAge', true);

        console.log('update6',update6);

        jsql.update(update6).then(function (result) {
            console.log('update6',result);
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

cases['Update 7 uzycie repos nieistniejaca tabela'] =  function (callBack) {

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
            .namedQuery('updatePersonAge', 'update ludzie set wiek = 5');

        var update7 = jsql.get('updatePersonAge');

        console.log('update7',update7);

            jsql.update(update7).then(function (result) {
            console.log('update7',result);
             if(result.code === 400 && result.description === 'ERROR: relation "ludzie" does not exist'){
             resultCallback('SUCCESS');
    }   else{
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

cases['Update 8 uzycie repos niepoprawna skladnia'] =  function (callBack) {

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
            .namedQuery('updatePersonAge', 'update person frddsasa sesaaslect sedsare age > :age');

        var update8 = jsql.get('updatePersonAge');

        console.log('update8',update8);

        jsql.update(update8).then(function (result) {
            console.log('update8',result);
            if(result.code === 400 && result.description === 'ERROR: syntax error at or near "sesaaslect"'){
                resultCallback('SUCCESS');
            }   else{
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