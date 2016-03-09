/**
 * Created by Kay on 3/8/2016.
 *
 * This view is the pattern that each Child View will follow (this is an Item View)
 * - Each Tile uses an instance of this view that will be passed one Backbone Model from the Composite View's collection
 */

define( [ 'jquery', 'marionette', 'underscore' ], function ( $, Marionette, _ ) {
    return Marionette.ItemView.extend( {
        // Mapping of element names to corresponding jQuery selector (convenient method of accessing DOM elements)
        ui : {
            like : '.js-content-likes',
            heart : '.js-glyphicon'
        },

        // Specifying events that can be triggered on this view
        events : {
            'click @ui.like' : 'countLike'
        },

        // Specifying events that can be triggered on this view's Backbone Model
        modelEvents : {
            'change' : 'render'
        },

        // Setup for Child View
        initialize : function () {
            this.setupTemplate();
        },

        /**
         * After a model change event the view will be re-rendered and we need to refresh the template again to
         * reflect the correct number of likes
         */
        onBeforeRender : function () {
            this.setupTemplate();
        },

        /**
         *
         */
        setupTemplate : function () {
            this.template =
                '<div><div class="col-md-6 col-lg-4 content">' +
                    '<div class="col-xs-12">' +
                        '<img class="content__image content__image--centered" src="' + this.options.model.get( 'img' ) + '" height="320" width="320"></div>' +
                    '<div class="col-xs-6">' +
                        this.options.model.get( 'label' ) +
                    '</div>' +
                    '<div class="col-xs-6 js-content-likes content__likes">' +
                        '<span class="js-glyphicon glyphicon glyphicon-heart-empty" aria-hidden="true"></span> ' + this.options.model.get( 'likes' ) +
                    '</div>' +
                    '<div class="col-xs-12 userInfo">' +
                        '<img class="img-circle" src="' + this.options.model.get( 'userImage' ) + '" width="50" height="50">' +
                        '<span class="userInfo__value">' + this.options.model.get( 'userName' ) + '</span>' +
                    '</div>' +
                '</div></div>';
        },

        /**
         * Handling the click on the likes area
         * Should have been handled by the controller in strict accordance to MVC patterns, but for demonstration
         * purposes and due to the fact that it's just a minor change regarding functionality, we can dismiss this.
         *
         * Sets the icons according to the like-state (liked / not liked) and handles the counter of the model's likes
         * value
         */
        countLike : function () {
            var hasLiked = this.options.model.get( 'hasLiked' );
            if ( hasLiked ) {
                this.options.model.set( 'likes', this.options.model.get( 'likes' ) - 1 );
                this.options.model.set( 'hasLiked', false );
                this.ui.heart.removeClass( 'glyphicon-heart' ).addClass( 'glyphicon-heart-empty' );
            } else {
                this.options.model.set( 'likes', this.options.model.get( 'likes' ) + 1 );
                this.options.model.set( 'hasLiked', true );
                this.ui.heart.removeClass( 'glyphicon-heart-empty' ).addClass( 'glyphicon-heart' );
            }

        }
    } );
} );