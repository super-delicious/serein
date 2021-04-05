var $menu = $('#menu'),
    $search = $( "#search" ),
    $search_box = $(".search_box");

//SEARCH BOX ADDS CLASS
  $search.click(function(e) {
		e.preventDefault();
	$search_box.toggleClass('active');
	});
