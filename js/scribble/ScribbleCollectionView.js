/**
 * Created by Kay on 3/8/2016.
 */

define( [
    'jquery',
    'marionette',
    'underscore',
    'scribble/ScribbleChildView'
], function ( $, Marionette, _, ScribbleChildView ) {
    return Marionette.CollectionView.extend( {
        childView : ScribbleChildView,

        initialize : function () {
            console.log( 'options', this.options );
        }
    } )
} );