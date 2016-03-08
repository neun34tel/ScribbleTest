/**
 * This is the main entry point of the application
 */
require.config( {
    paths : {
        underscore : '../bower_components/underscore/underscore',
        jquery     : '../bower_components/jquery/dist/jquery',
        backbone  : '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
//        bootstrap : '../bower_components/bootstrap/dist/js/bootstrap'
    }
} );

require( [ 'app' ], function ( App ) {
} );