$(function() {

	$('nav a').click( function(){
	  var scroll_el = $(this).attr('href');
	        if ($(scroll_el).length != 0) {
	      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	        }
	      return false;
	})

	$(".mask").mask("+7 (999) 999-99-99");

	$('.action__btn').on('click',function(e){
		$target = $(this).data('product');
		$price = $(this).data('pprice');
		$info = $target + " | " + $price +' руб.';
		$('.product_title').val($info); 
	})

var saleDate = new Date();
var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

saleDate.setDate(saleDate.getDate() + 2) ;

$('.sale__date').text(saleDate.getDate());
$('.sale__month').text(month[saleDate.getMonth()]);
$('.sale_dateMonth').text('' + saleDate.getDate() + '.' + (saleDate.getMonth() + 1));
});
