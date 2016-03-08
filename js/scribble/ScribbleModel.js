/**
 * Created by Kay on 3/8/2016.
 */

define( [ 'backbone' ], function ( Backbone ) {
    return Backbone.Model.extend( {
        defaults : {
            img       : 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/256x256.gif',
            label     : 'label',
            likes     : 0,
            userImage : 'https://battlecodevis.herokuapp.com/assets/images/avatar_placeholder.png',
            userName  : 'username'
        }
    } );
} );
