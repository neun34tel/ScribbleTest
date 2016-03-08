/**
 * Created by Kay on 3/7/2016.
 */
require( [ 'underscore', 'jquery', 'backbone', 'marionette', 'scribble/index' ], function ( _, $, backbone, marionette ) {

    var Backbone        = backbone;
    var Marionette      = marionette;

    var App = new Backbone.Marionette.Application();
    return App;
} );