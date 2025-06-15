document.addEventListener('DOMContentLoaded', function(){
	if(gst_page[0]){
		gst_page[3].classList.add('active');
	}
	console.log(gst_page_btns.length)
	for(let i=0;i<gst_page_btns.length; i++){
		if(gst_page[i]){
			gst_page_btns[i].addEventListener('click', function(){
				gst_page.forEach(page => {
					if(page.classList.contains('active')){
						page.classList.remove('active');
					}
				});
				gst_page[i].classList.add('active');
			});
		}
	}
});