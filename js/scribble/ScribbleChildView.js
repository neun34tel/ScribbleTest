/**
 * Created by Kay on 3/8/2016.
 */

define( [ 'jquery', 'marionette', 'underscore' ], function ( $, Marionette, _ ) {
    return Marionette.ItemView.extend( {

        initialize : function () {
            console.log( 'child options', this.options );
            this.setupTemplate();
        },

        setupTemplate : function () {
            this.template =
                '<div><div class="col-md-4 content">' +
                    '<div class="col-xs-12"><img class="content__image content__image--centered" src="' + this.options.model.get( 'img' ) + '" height="320" width="320"></div>' +
                    '<div class="col-xs-6">' +
                    this.options.model.get( 'label' ) +
                    '</div>' +
                    '<div class="col-xs-6 content__likes">' +
                    '<span class="glyphicon glyphicon glyphicon-heart-empty" aria-hidden="true"></span> ' + this.options.model.get( 'likes' ) +
                    '</div>' +
                '</div></div>';
        }
    } );
} );