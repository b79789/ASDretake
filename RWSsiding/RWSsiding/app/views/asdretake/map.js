function(doc) {
  	if(doc._id.substr(0,8) === "estimate"){
  		emit(doc._id.substr(8), {
  			"formFirstName": doc.formFirstName,
  			"formLastName": doc.formLastName,
  			"formEmail": doc.formEmail,
  			"formPhone": doc.formPhone
  		});
  	}
};