$(document).ready(function(){
      $('.slider').slick({
	      slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  dots: true /*,*/
		  /*responsive: [
		    {
		      breakpoint: 830,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 650,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	      ]*/
      });
});