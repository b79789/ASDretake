// Brian Stacks 9/30/13
// ASD--1310

$("#home").on('pageinit', function () {
    //code needed for home page goes here
});


$("#form").on('pageinit', function () {
    //code for form page goes here.

    function validate() {
        var valForm = $("#addForm"),
            myFormErrorLink = $("#addFormErrorLink");


        valForm.validate({
            invalidHandler: function (form, validator) {
                myFormErrorLink.on();
                var html = "";
                for (var key in validator.submitted) {
                    var myLabel = $("label[for^='" + key + "']").not("[generated]");
                    var legend = myLabel.closest("fieldset").find(".ui-controlgroup-label");
                    var fieldName = legend.length ? legend.text() : myLabel.text();
                    html += "<li>" + fieldName + "</li>";
                }

                $("#errorPage ul").html(html);
            },
            submitHandler: function () {
                var data = valForm.serializeArray();
                parseAddForm(data);

            }
        });
    }

    var parseAddForm = function (data) {
        //use form data here
        var myId = Math.floor(Math.random() * 9000009);
        // get all form value and store in object
        var myItem = {};
        myItem.firstName = ["First Name:", $("#formFirstName").val()];
        myItem.lastName = ["Last Name:", $("#formLastName").val()];
        myItem.formEmail = ["Email:", $("#formEmail").val()];
        myItem.formPhone = ["Phone Number", $("#formPhone").val()];
        //Save data to local storage Use stringify to covert object
        localStorage.setItem(myId, JSON.stringify(myItem));
        alert("Reservation Saved!");
    };

        function showItems() {
            for (var i in localStorage) {
                console.log(localStorage[i]);
            }

            for (i = 0, len = localStorage.length; i < len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                console.log(key + " => " + value);
            }
        }


        function clearUserData() {
            if (localStorage.length === 0) {
                alert("There is no data!");
            } else {
                localStorage.clear();
                alert("All info wiped!");
                window.location.reload();
                return false;
            }
        }
        //rest of javascript for page
        $("#showMyInfo").on("click", function(e){
			e.preventDefault();
			var fName = $("#formFirstName").val();
			var lName = $("#formLastName").val();
			var eMail = $("#formEmail").val();
			var pNum = $("#formPhone").val();
				$("#display ul").html("<li> " + '  First Name: '  + fName + "<br>" + '  Last Name:  ' +  lName  + "<br>" +'  Email:  ' + eMail + "<br>" +'  Phone Number:  ' + pNum + "</li>");
})	
        $("#data1").on("click", function () {
            $.ajax({
                url: "libs/JSON.js",
                type: "GET",
                dataType: "json",
                success: function (data, status) {
                	var obj = $.parseJSON(JSON.stringify(data));
                    console.log( obj, status);
                    $("#display ul").html("<li> " + JSON.stringify(data) + "</li>");
                },
                error: function (error, parseerror) {
                    console.log(error, parseerror);
                }
            });

        });
        
        
        

        
        
    var submitData = $("#submit");
    submitData.on("click", validate);


    var clearData = $("#clearMy");
    clearData.on("click", clearUserData);

  


});









$("#photos").on('pageinit', function () {
    //code for  photos page goes here.

});

$("#contactUs").on('pageinit', function () {
    //code for contactUs page goes here.

});