$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 3000 } ); //to increase/decrease carousel time interval
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#loginlink").click(function(){
        $("#loginModal").modal();
    });

    $("#reservetablebtn").click(function(){
        $("#ReserveTableModal").modal();
    });
});