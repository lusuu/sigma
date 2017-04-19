$(function(){
    var wrapper = $( ".file-upload" ),
        inp = wrapper.find( ".input-file" ),
        btn = wrapper.find( ".btn" ),
        lbl = wrapper.find( ".chosen" );


    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] ) 
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Choose file" );
        }else
            btn.text( file_name );
    }).change();

});
