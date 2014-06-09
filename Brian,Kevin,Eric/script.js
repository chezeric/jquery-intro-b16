


      $("#awayTab").hover(function(){
        $(".awayScore").removeClass("hidden")
        $(".homeScore").addClass("hidden")
        $("#homeTab").removeClass("selected")
        $("#awayTab").addClass("selected")
        $(".playername img").css({"backgroundColor": "#fff", "border-color":"#ff7f00"})
        $(".playername").css({"backgroundColor": "#072854", "border-color": "#ff7f00"})
      });

      $("#homeTab").hover(function(){
        $(".homeScore").removeClass("hidden")
        $(".awayScore").addClass("hidden")
        $("#awayTab").removeClass("selected")
        $("#homeTab").addClass("selected")
        $(".playername img").css({"backgroundColor": "#fb5b1f", "borderColor": "#fffdd0"})
        $(".playername").css({"backgroundColor": "#000000", "borderColor":"#fffdd0"})
      });

      $("#button").on("click", function(event){

event.preventDefault();
        $("html, body").animate({
          scrollTop: $("#results").offset().top
        },1000)

      });
