$('.bxslider li').bxSlider({
  mode: 'vertical',
  randomStart: false,
	autoHover: false,
	autoDelay: 0,
	auto: true,
	pause: 3000,
	controls: false,
	pager: false,
	infiniteLoop: true,
	touchEnabled: (navigator.maxTouchPoints > 0)
});


const uniTableWrap = document.querySelector('.pass--uni--table__wrap02');
const uniTableWrapTable = document.querySelector('.pass--uni--table__wrap02 .uni_table');
const uniTableWrapTableTr = document.querySelector('.pass--uni--table__wrap02 .uni_table').getElementsByTagName("tr");
console.log(uniTableWrapTableTr)
if(uniTableWrapTableTr.length > 10) {
	uniTableWrap.style.height = "188px"
	uniTableWrap.style.overflowY = "scroll"
} else {
	uniTableWrap.style.heithg = "auto"
	uniTableWrap.style.overflowY = "none"
}

$(".close_btn").click(function() {
	$(".pass--uni__wrap").hide()
	$(".pass--uni--table__wrap").show()
})
$(".open_btn").click(function() {
	$(".pass--uni__wrap").show()
	$(".pass--uni--table__wrap").hide()
})