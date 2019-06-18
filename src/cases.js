var cases = {};

var caseName1 = 'Insert person';
cases[caseName1] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName1);
        cases[caseName2]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.insert("@sql insert into person (id, name, surname, age) values (nextval('person_id_seq'), :name, :surname, :age)")
            .params({
                name: 'Mirek',
                surname: 'Wołyński',
                age: 38
            })
            .then(function (result) {
                console.log(caseName1, result);
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



var caseName2 = 'Insert car';
cases[caseName2] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName2);
        cases[caseName3]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.insert("@sql insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
            .params([19.500, 2000, 'Audi A3'])
            .then(function (result) {
                console.log(caseName2, result);
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


var caseName3 = 'Update persons';
cases[caseName3] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName3);
        cases[caseName4]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.update("@sql update person set salary = 4000 where age > :age")
            .param('age', 30)
            .then(function (result) {
                console.log(caseName3, result);
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


var caseName4 = 'Update cars';
cases[caseName4] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName4);
        cases[caseName5]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        // jsql.update("update car set created_at = ?")
        //     .params([ new Date().getTime() ])
        jsql.update("@sql update car set type = ?")
            .params([ 'osobowy' ])
            .then(function (result) {
                console.log(caseName4, result);
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


var caseName5 = 'Select person';
cases[caseName5] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName5);
        cases[caseName6]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.selectOne("@sql select * from person where age > :ageMin and age < :ageMax limit 1")
            .param('ageMin', 30)
            .param('ageMax', 50)
            .then(function (result) {
                console.log(caseName5, result);

                if (!jsql.isArray(result)) {
                    resultCallback('SUCCESS');
                } else {
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

var caseName6 = 'Select cars';
cases[caseName6] = function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName6);
        cases[caseName7]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.select("@sql select id, price from car")
            .then(function (result) {
                console.log(caseName6, result);

                if (jsql.isArray(result)) {
                    resultCallback('SUCCESS');
                } else {
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

var caseName7 = 'Delete persons';
cases[caseName7] =  function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName7);
        cases[caseName8]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.remove("@sql delete from person where age > 30")
            .then(function (result) {
                console.log(caseName7, result);
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

var caseName8 = 'Delete cars';
cases[caseName8] =  function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName8);
        cases[caseName9]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        jsql.remove("@sql delete from car where price <> :price")
            .params({
                price: 10.000
            })
            .then(function (result) {
                console.log(caseName8, result);
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


var caseName9 = 'Transaction insert and rollback';
cases[caseName9] =  function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName9);
        cases[caseName10]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        var transaction = jsql.tx();

        transaction.insert("@sql insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
            .params([180000, 2018, 'Audi A6'])
            .then(function (result) {
                console.log(caseName9, result);

                transaction.rollback().then(function(result){
                    console.log(caseName9, result);
                    resultCallback('SUCCESS');
                });

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

var caseName10 = 'Transaction insert and commit';
cases[caseName10] =  function () {

    var start = new Date().getTime();

    var resultCallback = function (status) {
        var end = new Date().getTime();
        var duration = end - start;

        resultCase(status, duration, caseName10);
       // cases[caseName11]();

    };

    try {

        var jsql = new JSQL({
            host: host, apiKey: apiKey, devKey: devKey
        });

        var transaction = jsql.tx();

        transaction.insert("@sql insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
            .params([200000, 2019, 'Volkswagen Variant'])
            .then(function (result) {
                console.log(caseName10, result);

                transaction.commit().ok();
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