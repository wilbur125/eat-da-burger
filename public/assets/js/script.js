// load burgers
$.getJSON('/api/burgers', function( data ) {

    $.each( data, function( key, burger ) {
        
        if(burger.devoured) {
            $('#colDevoured').append('<li>'+burger.burger_name+'</li>');
        } else {
            $('#colTodo').append('<li>'+burger.burger_name+' <button data-id="' + burger.id + '">Devoured!</button></li>');
        }

    });

});


// handle submit
$('#submit').click(function(e) {
    // stop event bubbling
    e.preventDefault();

    var burger_name = $('input[name=burger_name]').val();
    $.post('/api/burgers', {
        burger_name: burger_name,
        devoured: 0
    }, function(response) {
        console.log(response);
        $('#colTodo').prepend('<li>'+burger_name+' <button data-id="' + response.id + '">Devoured!</button></li>');
    });

    return false;

});


// handle devoured
$('#colTodo').click(function(e) {

    if($(e.target).closest('button').length) {

        var burger_id = $(e.target).data('id');

        $.ajax({
            type: "PUT",
            url: '/api/burgers/' + burger_id,
            data: { devoured: 1 },
            success: function(response) {
                console.log(response);
                $(e.target).hide();
                $(e.target).parents('li').appendTo( $('#colDevoured') );
            }
          });

    }
    
});