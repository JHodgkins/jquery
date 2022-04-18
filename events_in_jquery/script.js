$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

/**
 * other events
 * $('#stream1_btn').click(function(){
 * }). works the same as above click example
 * 
 * $('#stream1_btn').mouseenter(function(){
 * }) // mouse hober
 * 
 * $('#stream1_btn').mouseleave(function(){
 * }) // mouse out
 */

// Animations
//show
$(document).ready(function() {
     $("#stream1_btn").on(function() {
         $(".stream1").show(); // default
         $(".stream1").show('slow');
         $(".stream1").show('medium');
         $(".stream1").show('fast');
         $(".stream1").show('1000'); // num of milliseconds
    });
//hide
     $("#stream1_btn").on(function() {
          $(".stream1").hide(); // default, like display noe
          $(".stream1").hide('slow');
          $(".stream1").hide('medium');
          $(".stream1").hide('fast');
          $(".stream1").hide('1000'); // num of milliseconds
     });
// toggle
     $("#stream1_btn").on(function() {
          $(".stream1").toggle(); // default, toggles showing on/off
          $(".stream1").toggle('slow');
          $(".stream1").toggle('medium');
          $(".stream1").toggle('fast');
          $(".stream1").toggle('1000'); // num of milliseconds
     });

// slide slideDown, slideUp - slides down an element to show/hide it
     $("#stream1_btn").on(function() {
          $(".stream1").slideDown(); // default, slide down an element
          $(".stream1").slideDown('1000'); // num of milliseconds
     });
// slideToggle - hides an element if shown, shows if hidden
     $("#stream1_btn").on(function() {
          $(".stream1").slideToggle(); // default
          $(".stream1").slideToggle('1000'); // num of milliseconds
     });
// fade in/out - fades in or out a hidden/shown element
     $("#stream1_btn").on(function() {
          $(".stream1").fadeIn(); // default, like display noe
          $(".stream1").fadeOut('1000'); // num of milliseconds
     });
// fadeToggle
     $("#stream1_btn").on(function() {
          $(".stream1").fadeToggle(); // default, like display noe
          $(".stream1").fadeToggle('1000'); // num of milliseconds
     });
// fadeTo
     $("#stream1_btn").on(function() {
          $(".stream1").fadeTo(1000, 0.5); // fadeTo(speed, opacity)
     });
});
