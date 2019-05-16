$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});



      //    var tab = [];

      //    var obj = {
      //      'url': "assets/img/categ_make_up_home@2x.png",
      //      'cardT': "elyes",
      //      'cardDes': 'elyes elyes'
           
      //    }
      //    tab.push(obj);
      //    for (i=0; i<tab.length; i++){
       
      //     card = ' <div class="carousel-item col-md-4"> <div class="card"> <img class="card-img-top img-fluid" src="'+tab[i].url+'" alt="Card image cap"> <div class="card-body"> <h4 class="card-title">'+tab[i].cardT+'</h4> <p class="card-text text-center">'+tab[i].cardDes+'</p> </div> </div> </div>';
      //     document.getElementById('show').innerHTML+= card;
      //  }

       $.getJSON('https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN', function(data) {
         var text = data.data;
     console.log(text)
         for (i=0; i<text.length; i++) {
          card = ' <div class="carousel-item col-md-4"> <div class="card"> <img class="card-img-top img-fluid" src="http://'+text[i].imagePath+'" alt="Card image cap"> <div class="card-body"> <h4 class="card-title">'+text[i].label+'</h4> <p class="card-text text-center">'+text[i].description+'</p> </div> </div> </div>';
          document.getElementById('cardshow').innerHTML+= card;
         }
         
          });
       