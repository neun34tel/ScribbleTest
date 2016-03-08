/**
 * This is the main entry point of the application
 */
require.config( {
    paths : {
        underscore : '../bower_components/underscore/underscore',
        jQuery     : '../bower_components/jquery/dist/jquery',
        backbone  : '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette'
    }
} );

require( [ 'app' ], function ( App ) {
} );