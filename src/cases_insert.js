
/**
 * Inserting SQL
 * @Expect Success
 */
cases['Insert 1'] =  function (callBack) {

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

        jsql.insert("insert into person (id, name, surname, age) values (nextval('hibernate_sequence'), :name, :surname, :age)")
            .params({
                name: 'Mirek',
                surname: 'Wołyński',
                age: 38
            })
            .then(function (result) {
                console.log('insert 1',result);
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


cases['Insert 2 niepoprawne zapytanie'] =  function (callBack) {

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

        jsql.insert("insert into ludzie (ids, imie, surname, age) values (nextval('hibernate_sequence'), :names, :surname, :age)")
            .params({
                name: 'Jan',
                surname: 'Kowalski',
                age: 19
            })
            .then(function (result) {
                console.log('insert 2',result);
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


cases['Insert 3 puste zapytanie'] =  function (callBack) {

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

        jsql.insert("")
            .then(function (result) {
                console.log('insert 3',result);
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


cases['Insert 4 imie podane w cudzyslowiu '] =  function (callBack) {

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

        jsql.insert("insert into person (id, name, surname) values (986, 'Zbyszek', 'Nowak')")

            .then(function (result) {
                console.log('insert 4',result);
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


cases['Insert 5 imie podane BEZ cudyslowiu'] =  function (callBack) {

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

        jsql.insert("insert into person (name) values (Zbyszek)")

            .then(function (result) {
                console.log('insert 5',result);
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

cases['Insert 6'] =  function (callBack) {

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

        jsql.set ('insertPerson', "insert into person (id, name, surname, age) values (nextval('hibernate_sequence'), :name, :surname, :age)");

        var queryinsert1 = jsql.get('insertPerson');

        console.log('queryinsert1',queryinsert1);

        jsql.insert(queryinsert1).params({
            name: 'Mirek',
            surname: 'Wołyński',
            age: 38}).then(function (result) {
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

cases['Insert 7 niepoprawne zapytanie'] =  function (callBack) {

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

        jsql.set ('insertPerson', 'insert into ludzie (ids, imie, surname, age) values (nextval('hibernate_sequence'), :names, :surname, :age)');

        var queryinsert2 = jsql.get('insertPerson');

        console.log('queryinsert2',queryinsert2);

        jsql.insert(queryinsert2).params({
            name: 'Jan',
            surname: 'Kowalski',
            age: 19
        }).then(function (result) {
            console.log(result);

            if(result.code === 400 ){
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
cases['Insert 8 puste zapytanie'] =  function (callBack) {

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

        jsql.set ('insertPerson', ' ');

        var queryinsert3 = jsql.get('insertPerson');

        console.log('queryinsert3',queryinsert3);

        jsql.insert(queryinsert3).params({
            name: 'Jan',
            surname: 'Kowalski',
            age: 19
        }).then(function (result) {
            console.log(result);

            if(result.code === 400 ){
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

cases['Insert 9 puste zapytanie'] =  function (callBack) {

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

        jsql.set ('insertPerson', ' ');

        var queryinsert4 = jsql.get('insertPerson');

        console.log('queryinsert4',queryinsert4);

        jsql.insert(queryinsert4).then(function (result) {
            console.log(result);

            if(result.code === 400 ){
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

cases['Insert 10 imie podane w cudzyslowiu'] =  function (callBack) {

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
            .namedQuery('insertPerson', "insert into person (id, name, surname) values (1000, 'John', 'Snow')");

        var queryinsert5 = jsql.get('insertPerson');

        console.log('queryinsert5',queryinsert5);

        jsql.insert(queryinsert5).then(function (result) {
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

cases['Insert 12 dane bez cudzyslowia'] =  function (callBack) {

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
            .namedQuery('insertPerson', "insert into person (id, name, surname) values (1000, John, Snow)");

        var queryinsert6 = jsql.get('insertPerson');

        console.log('queryinsert6',queryinsert6);

        jsql.insert(queryinsert6).then(function (result) {
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