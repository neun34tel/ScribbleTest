/**
 * Created by Kay on 3/8/2016.
 *
 * This ScribbleController will have full control over what happens in the App
 * - it will instantiate our views
 * - it will instantiate our models / collection
 * - etc.
 */

define( [
    'backbone',
    'marionette',
    'scribble/ScribbleCompositeView',
    'scribble/ScribbleModel',
    'scribble/ScribbleCollection',
    'underscore',
    'chance'
], function ( Backbone, Marionette, ScribbleCompositeView, ScribbleModel, ScribbleCollection, _ ) {
    return Marionette.Controller.extend( {
        // Setup for the controller
        initialize : function () {
            this.collection = new ScribbleCollection( this.generateMockData( 15 ) );
            this.initViews();
        },

        /**
         * Helper function to generate mock data
         *
         * Used to populate the page with useful data
         * @param amount - how many tiles do we want to create (number of models to be generated, defaults to 6)
         * @returns {Array} - array of Backbone Models
         */
        generateMockData : function ( amount ) {
            var amount = amount || 6; // If no amount is given, generate 6 new Backbone Models
            var modelArray = [];

            // Loop to create each Backbone Model
            for ( var i = 1; i <= amount; i++ ) {
                var user = chance.first() + ' ' + chance.last();
                modelArray.push( new ScribbleModel( {
                    img       : 'http://dummyimage.com/320x320/CCC/&text=' + user,
                    label     : chance.word(),
                    likes     : Math.floor( Math.random() * 1000 + 1 ),
                    userName  : user
                } ).bind( this ) );
            }

            // Return an array containing the Backbone Models
            return modelArray;
        },

        /**
         * Instantiate a ScribbleCompositeView and set it up so it is shown (rendered)
         */
        initViews : function () {
            this.CompositeView = new ScribbleCompositeView( {
                el         : '#js-content',
                collection : this.collection
            } );
            // Listen to the 'onMoreClicked' event from the CompositeView and handle it in this.onMoreClicked
            this.listenTo( this.CompositeView, 'onMoreClicked', this.onMoreClicked.bind( this ) );
            this.CompositeView.render();
        },

        /**
         * Handle click of the "Weitere Ergebnisse" button
         */
        onMoreClicked : function () {
            var mocking = this.generateMockData();
            this.collection.add( mocking );
        }
    } )
} );