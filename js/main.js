$(document).ready(function(){
    $('body').on('click', '.icon-close', function() {
        $(this).parents('.box').remove();
        //$('.box').remove();
    });

    $(".btn-add").click(function(){
        $(".box-first:nth-child(1)").clone().appendTo('.warpper');
    });
});