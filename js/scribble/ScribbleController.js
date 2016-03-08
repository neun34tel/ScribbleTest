/**
 * Created by Kay on 3/8/2016.
 */

define( [
    'backbone',
    'marionette',
    'scribble/ScribbleCollectionView',
    'scribble/ScribbleModel',
    'scribble/ScribbleCollection',
    'underscore'
], function ( Backbone, Marionette, ScribbleCollectionView, ScribbleModel, ScribbleCollection, _ ) {
    return Marionette.Controller.extend( {
        initialize : function () {
            this.setupMockData();
            this.initViews();
        },

        setupMockData : function () {
            this.modelArray = [];

            for ( var i = 1; i <= 5; i++ ) {
                this.modelArray.push( new ScribbleModel( {
                    username : 'user ' + i,
                    likes    : Math.floor( Math.random() * 1000 + 1 )
                } ).bind( this ) );
            }

            this.collection = new ScribbleCollection( this.modelArray );
        },

        initViews : function () {
            this.CollectionView = new ScribbleCollectionView( {
                el         : '#content',
                collection : this.collection
            } );
            this.CollectionView.render();
        }
    } )
} );