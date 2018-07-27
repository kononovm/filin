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

var cupon = '8AVMB6';

$('.btn__cupon').html(cupon)

$('.js-action').each(function() {

var $this = $(this),
	$old = $this.find('.old-price'),
	$new = $this.find('.action__price--new'),
	$input = $this.find('.action__input'),
	$btn = $this.find('.btn')

$input.keyup(function(e){
	var val = $(this).val()
	
	if(cupon==val){
		$input.css({'color': '#68CF64', 'border': '3px solid #68CF64'})
		$old.addClass('action__price--old')
		$new.fadeIn(500)
		$btn.addClass('btn--bonuse')
	}
})

})


$('.sale__date').text(saleDate.getDate());
$('.sale__month').text(month[saleDate.getMonth()]);
$('.sale_dateMonth').text('' + saleDate.getDate() + '.' + (saleDate.getMonth() + 1));

if ($('.bonn__btn').hasClass('btn--action')==false) {
$('.bonn__btn').on('click', function(e) { 
	$this = $(this)
	$this.addClass('btn--action')
	$('.btn__text').css('display','none')
	$('.btn__cupon').css('display','block')
	$('.head-action__info-text').animate({opacity: 1}, 400)
})
}

});
