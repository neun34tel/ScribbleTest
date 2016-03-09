/**
 * Created by Kay on 3/8/2016.
 */

define( [ 'backbone' ], function ( Backbone ) {
    return Backbone.Model.extend( {
        defaults : {
            img       : 'http://dummyimage.com/320x320/CCC/ffffff&text=Tile+image',
            label     : 'label',
            likes     : 0,
            userImage : 'http://www.kcl.ac.uk/SiteElements/Prospectus/images/user.png',
            userName  : 'username'
        }
    } );
} );
