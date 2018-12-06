$(".nap").click(function() {
    $(".play").fadeOut();
});
$(".nap").click(function() {
    $(".sleep").fadeIn();
});

$(".chill").click(function() {
    $(".run").hide();
});
$(".chill").click(function() {
    $(".rest").show();
});


$(".loud").click(function() {
    $(".laugh").slideUp();
});
$(".loud").click(function() {
    $(".quiet").slideDown();
});