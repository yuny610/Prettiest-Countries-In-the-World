var pics = [];


$(".add").click(function(){
	let inputPic = $(".picture-url").val();
    pics.push(inputPic);
    $(".gallery").append("<img src="+ inputPic+">");
    	$(".picture.url").val('');
  
});