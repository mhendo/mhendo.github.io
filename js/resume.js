//click on an icon
$('#categories a').on('click', function(e){
	e.preventDefault();
	//grab the icon's url
	var pickedIcon = $(this).attr('href');
	//hide other content
	$('.content').slideUp();
	//show slowly
	$(pickedIcon).slideToggle('slow');
});