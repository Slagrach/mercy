$('.centerBlock-items').slick({
    slidesToShow: 5,
    infinite: false,
    arrows: false,
});

$('.handle').on("handle change", function(e){
    e.preventDefault();
    const slideno = $(this).val();
    $('.centerBlock-items').slick('slickGoTo', slideno-1 );
});