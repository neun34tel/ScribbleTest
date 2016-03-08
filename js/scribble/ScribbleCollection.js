/**
 * Created by Kay on 3/8/2016.
 */

define( [ 'backbone', 'scribble/ScribbleModel' ], function ( Backbone, ScribbleModel ) {
    return Backbone.Collection.extend( {
        model : ScribbleModel
    } );
} );
