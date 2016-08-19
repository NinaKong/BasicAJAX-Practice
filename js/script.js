var httpRequest; 
if(window.XMLHttpRequest) {
	httpRequest = new XMLHttpRequest();
} else {
	httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
}

httpRequest.open('GET', 'data/data.txt');

httpRequest.onreadystatechange = function(){
	if((httpRequest.status == 200)&&(httpRequest.readyState==4)) {
		document.write(httpRequest.responseText);
		console.log(httpRequest);
	}
}
httpRequest.send();


