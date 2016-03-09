/**
 * Created by Kay on 3/8/2016.
 *
 * This ScribbleCompositeView does twofold:
 * 1. it renders the button to see more customers on click
 * 2. it renders each model of the collection in a child view
 */

define( [
    'jquery',
    'marionette',
    'underscore',
    'scribble/ScribbleChildView'
], function ( $, Marionette, _, ScribbleChildView ) {
    return Marionette.CompositeView.extend( {
        // Providing a template so we have control over what is rendered and how
        template : function () {
            return '<div class="col-xs-12">' +
                        '<div class="js-childViewContainer"></div>' +
                        '<button class="js-btn-more btn btn-default btn-block btn--bigMargin">Weitere Ergebnisse</button>' +
                    '</div>'
        },

        // This will be the view used to render each Backbone Models' data
        // ==> One instance of ScribbleChildView for each model of the collection
        childView          : ScribbleChildView,
        // This container is the target for rendering all children
        childViewContainer : '.js-childViewContainer',

        // Mapping of element names to corresponding jQuery selector (convenient method of accessing DOM elements)
        ui : {
            more : '.js-btn-more'
        },

        // Specifying events that can be triggered on this view
        events : {
            'click @ui.more' : 'onMoreClicked'
        },

        /**
         * Handling the click on the "Weitere Ergebnisse" button
         * ==> Just triggering an event, since logic is not part of a views job (handled by the controller)
         */
        onMoreClicked : function () {
            this.trigger( 'onMoreClicked' );
        }
    } )
} );