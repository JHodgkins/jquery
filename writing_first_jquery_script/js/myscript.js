/**
 * This will still only add inline styles after document has loaded
 */
$(document).ready(function() { 
    $('h2').css('text-decpration', 'underline'); // underline all h2 elements
    $('ul').css('border', '1px solid #000');
});

/**
 * add css classes to html element instead
 */
$(document).ready(function() {
    // adds class
    $('h2').addClass('underline');
    $('ul').addClass('border');
    // removes class
    $('h2').removeClass('underline');
    $('ul').removeClass('border');
    // add class odd/even to table
    $('tr:odd').addClass('odd');
    $('tr:even').addClass('even');
})