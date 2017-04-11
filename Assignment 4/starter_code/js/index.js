$(document).ready(function(){

//read more
	$(".read-more").click(readMore);
	function readMore () {
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".read-more").hide();
		$(".read-less").show();
	}

	$(".read-less").hide();

	$(".read-less").click(readLess);
	function readLess () {
		event.preventDefault();
		$("#show-this-on-click").slideUp();
		$(".read-less").hide();
		$(".read-more").show('slow')
	}

//learn more
	
		$(".learn-more").click(learnMore);
	function learnMore () {
		event.preventDefault();
		$("span").slideDown();
		$(".learn-more").hide();
	}


})