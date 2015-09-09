function ajax(url,funsucc,funfail) {
	var oAjax = null;
	if (window.XMLHttpRequest) {
		oAjax = new XMLHttpRequest();
	} 
	else{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open('GET',url,true);
	oAjax.send();
	oAjax.onreadystatechange = function(){
		if (oAjax.readystate==4) {
			if (oAjax.status==200) {
				funsucc();
			} else{
				if (funfail) {
					funfail();
				}
			}
		} 
	}
}