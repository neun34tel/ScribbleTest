/**
 * This is the main entry point of the application
 */
require.config( {
    paths : {
        underscore : '../bower_components/underscore/underscore',
        jquery     : '../bower_components/jquery/dist/jquery',
        backbone   : '../bower_components/backbone/backbone',
        marionette : '../bower_components/marionette/lib/backbone.marionette',
        chance     : '../bower_components/chance/dist/chance.min'
    }
} );

require( [ 'app' ], function ( App ) {
} );