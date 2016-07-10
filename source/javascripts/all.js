console.log("loaded");


var href = window.location.href;
href = href.substr(href.lastIndexOf('/') + 1);

if (href == 'introduction'){
	$('#introduction').addClass("active");
}
if (href == 'examples'){
	console.log('activated');
	$('#examples').addClass("active");
}
if (href == 'blog'){
	$('#blog').addClass("active");
}
