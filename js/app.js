$(document).ready(function () {
    $("#addButton").click(function () { 
        $("body").append('<div id="element"></div>');        
    });

    $("#minusButton").click(function (){ 
       $('#element').remove();        
    });

    $('#hideButton').click(function () { 
        $('#element').hide();      
    });
    $('#showButton').click(function () { 
        $('#element').show();      
    });

    $('#name').keyup(function () { 
        let name = $('#name').val();
        $('#welcome').html(name);
    });
});