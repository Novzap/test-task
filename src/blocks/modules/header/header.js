import $ from 'jquery';
import '../../../../node_modules/slick-carousel/slick/slick.js';


  $(document).ready(function(){
    let slickOpts = {
        arrows: false,
        dots: true
    };
    $('.slider').slick(slickOpts)
  });