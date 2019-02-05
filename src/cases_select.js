
/**
 * Selecting SQL
 * @Expect Success
 */
cases['Select 1'] =  function (callBack) {

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

        jsql.select("select * from person").then(function (result) {
            console.log('select 1', result);

            if(jsql.isArray(result)){
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


cases['Select 2 zmiana podwojnego cudzyslowu na pojedynczy'] =  function (callBack) {

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

        jsql.select('select * from person').then(function (result) {
            console.log('select 2',result);

            if(jsql.isArray(result)){
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


cases['Select 3 dodatkowe spacje i entery'] =  function (callBack) {

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

        jsql.select("select   *" +
            " from person").then(function (result) {
            console.log('select 3', result);

            if(jsql.isArray(result)){
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
        resultCallback('success');
    }


};


cases['Select 4 zapytanie napisane duzymi lub malymi literami'] =  function (callBack) {

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

        jsql.select('SELECT * FROM person').then(function (result) {
            console.log('select 4', result);

            if(jsql.isArray(result)){
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


cases['Select 5 niepoprawne zapytanie'] =  function (callBack) {

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

        jsql.select('select member from public.member')
            .then(function (result) {
                console.log('select 5',result);
                if(result.code === 400 && result.description === 'ERROR: relation "member" does not exist') {
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


cases['Select 6 z uzyciem where'] =  function (callBack) {

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

        jsql.select("select name from person where id=1").then(function (result) {
            console.log('select 6',result);
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


cases['Select 7 uzyciem innerjoin'] =  function (callBack) {

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

        jsql.select("SELECT price FROM car INNER JOIN person ON car.id=person.id").then(function (result) {
            console.log('select 7',result);
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


cases['Select 8 puste zapytanie'] =  function (callBack) {

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

        jsql.select("").then(function (result) {
            console.log('select 8',result);
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


cases['Select 9 niepoprawna składnia zapytania'] =  function (callBack) {

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

        jsql.select("fddsf234 3juy23d").then(function (result) {
            console.log('select 9',result);

            if(result.code === 400 && result.description === 'ERROR: syntax error at or near "fddsf234"'){
                resultCallback('SUCCESS');
            }else{
                resultCallback('FAILED')
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


cases['Select 10 uzycie repos'] =  function (callBack) {

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
            .namedQuery('getCarPrice', 'select price from car');

        jsql.repo()
            .namedQuery('getCarName', function(id) {

                var query = jsql.query('select name from car ');

                if(id){
                    query.append('where id = :id');
                }

                return query;

            });


        jsql.set('getCarColor', 'select color from car where id = ?');
        jsql.set('getCarModel', function(id){

            var query = jsql.query('select model from car ');

            if(id){
                query.append('where id = :id');
            }

            return query;

        });

        var query1 = jsql.get('getCarPrice');
        var query2 = jsql.get('getCarName');
        var query3 = jsql.get('getCarName', true);
        var query4 = jsql.get('getCarColor');
        var query5 = jsql.get('getCarModel', true);

        console.log('query1',query1);
        console.log('query2',query2);
        console.log('query3',query3);
        console.log('query4',query4);
        console.log('query5',query5);

        jsql.select(query1).then(function (result) {
            console.log(result);
            resultCallback('SUCCESS');
        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

        jsql.select(query2).then(function (result) {
            console.log(result);
            resultCallback('SUCCESS');
        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

        jsql.select(query3).then(function (result) {
            console.log(result);
            resultCallback('SUCCESS');
        })
            .catch(function (error) {
                console.error(error);
                resultCallback('FAILED');
            });

        jsql.select(query4).then(function (result) {
            console.log(result);
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

cases['Select 11 uzycie repos dodatkowe spacje'] =  function (callBack) {

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
            .namedQuery('getPerson', 'select *  ' +
                ' from person');

        var query6 = jsql.get('getPerson');

        console.log('spacje i entery',query6);

        jsql.select(query6).then(function (result) {
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

cases['Select 12 uzycie repos podwojny cudzyslow'] =  function (callBack) {

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

        jsql.set('getPerson',  function(id) {

            var query = jsql.query("select * from person");

            if(id){
                query.append('where id = :id');
            }

            return query;

        });

        var query7 = jsql.get('getPerson', true);

        console.log('query7',query7);

        jsql.select(query7).then(function (result) {
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

cases['Select 13 uzycie repos rozna wielkosc liter'] =  function (callBack) {

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
            .namedQuery('getCarName2', 'select name FROM car ');

        var query8 = jsql.get('getCarName2');

        console.log('query8',query8);

        jsql.select(query8).then(function (result) {
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

cases['Select 14 uzycie repos dodatkowe przecinki'] =  function (callBack) {

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
            .namedQuery('getMember', function(id) {

                var query = jsql.query('select member, from public.member');

                if(id){
                    query.append('where id = :id');
                }

                return query;

            });

        var query9 = jsql.get('getMember', true);

        console.log('query9',query9);

        jsql.select(query9).then(function (result) {
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

cases['Select 15 uzycie repos nieistniejąca tabela'] =  function (callBack) {

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
            .namedQuery('getCatname', function(type) {

                var query = jsql.query('select name, from Animal');

                if(type){
                    query.append('where type = cat');
                }

                return query;

            });

        var query10 = jsql.get('getCatname', true);

        console.log('query10',query10);

        jsql.select(query10).then(function (result) {
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

cases['Select 16 uzycie repos niepoprawne zapytanie'] =  function (callBack) {

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
            .namedQuery('getCatname', function(id,name) {

                var query = jsql.query("fddsf234 3juy23d");

                if(id){
                    query.append('where id = :id');
                }
                if(name){
                    query.append('where name = name');
                }

                return query;

            });

        var query11 = jsql.get('getCatname', true, true);

        console.log('query11',query11);

        jsql.select(query11).then(function (result) {
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
cases['Select 17 uzycie repos innejoin'] =  function (callBack) {

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

        jsql.set ('getCarPrice', 'SELECT price FROM car INNER JOIN person ON car.id=person.id');

        var query12 = jsql.get('getCarPrice');

        console.log('query12',query12);

        jsql.select(query12).then(function (result) {
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