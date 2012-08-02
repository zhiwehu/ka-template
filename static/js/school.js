
function toogleSaveSchool(url, csrfToken, id){
	var btnId="#"+id+"btn";
	var savedClass = "btn-saved"; 
	var action = "save";
	if ($(btnId).attr("class").indexOf(savedClass) != -1) {
		action = "remove";
	}
    $.ajax({
        type:"POST",
        url: url,
        data: {
            csrfmiddlewaretoken: csrfToken,
            school:id,
            action:action,
        },
        success: function(data) {
            if(action=='remove') {
                $(btnId).removeClass(savedClass); 
                $(btnId).val(' Save School ');
            } else {
            	$(btnId).addClass(savedClass);
            	$(btnId).val(' Saved ');
            }
        },
        error: function(error) {
            alert (error);
        }
    });
    return false;
}
