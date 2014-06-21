require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        'ydn-db': '../../bower_components/ydn-db/jsc/ydn.db-dev',
        handlebars: '../../bower_components/handlebars.js/dist/handlebars',
        quo: ['https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
                '..bower_components/quojs/quo'],
        lungo: '../../bower_components/lungo/lungo',
    },
    shim: {
        'handlebars': {
            exports : 'Handlebars'
        },
        'ydn-db': {
            exports : 'ydn'
        },
        quo: {
            exports : '$$'
        },
        'lungo': {
            deps : [
                'quo'
            ],
            exports : 'lungo'
        }
    }
});

require(['app'], function () {});