$(function(){
	$(".bt").click(function(){
		$("p").toggle(1000);
	})
	
	$('.bt').click(function(){
	var $this = $(this);
	$this.toggleClass('bt');
	if($this.hasClass('bt')){
		$this.text('Ver mas');			
	} else {
		$this.text('Ver menos');
	}
	});
})
