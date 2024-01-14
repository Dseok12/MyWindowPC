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

function uniTableFnc () {
	const uniTableWrap = document.querySelector('.pass--uni--table__wrap');
	const uniTableTr = document.querySelector('.pass--uni--table__wrap .uni_table').getElementsByTagName("tr");
	console.log(uniTableTr)
	if(uniTableTr.length > 10) {
		uniTableWrap.style.maxHeight = "188px"
		uniTableWrap.style.overflowY = "scroll"
	} else {
		uniTableWrap.style.heithg = "auto"
		uniTableWrap.style.overflowY = "none"
	}
}
uniTableFnc()

$(".close_btn").click(function() {
	$(".pass--uni__wrap").hide()
	$(".pass--uni--table__wrap").show()
})
$(".open_btn").click(function() {
	$(".pass--uni__wrap").show()
	$(".pass--uni--table__wrap").hide()
})