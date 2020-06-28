$('li').remove();

// check off specific todos by clicking

$('ul').on('click', 'li', function (event) {
    $(this).toggleClass('completed');
})
//click to delete todo
$('ul').on('click', 'span', function () {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropagation();

})

$('input[type=text]').keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>')

    }
})

$('.fa-plus').click(function(){
    $('input[type=text]').fadeToggle();
})

$('button').on('click', function() {
    $('li').remove();
})