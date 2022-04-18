/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$("a");

// The long version of the function
jQuery("a");

// Get all elements that contain a class of `card_image`
$(".card_image");

// Get all elements that contain an ID of `logoNav`
$("#logoNav");

// Get all anchors that are direct children of paragraphs
$("p>a");

// Get all anchor elements that are descendants of paragraphs
$("p a");

// Get all list item elements that are direct children of unordered lists
$("ul>li");

// Get all list item elements that are descendants of unordered lists
$("ul li");

// Get the first anchor element from the DOM
$("a:first");

// Get the last anchor element from the DOM
$("a:last");

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");

// All images, based on the element type
$(':img');
// The card_image class
$('.card_image');

// The footer, using its id
$('#my_footer');

// All paragraph tags within the footer
$('#my_footer p');

// All header elements (<h1> through <h6>)
$(':header');

// The first element on the page
$(':first');

// The last div on the page
$('div:last');

// The last image on the page
$('img:last');

// All elements with an href attribute
$('[href]');