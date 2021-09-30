function validate() {
    var x = document.order.email.value;
    var qty = document.order.qty.value;
    var phone = document.order.phone.value;
    var pincode = document.order.pincode.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
    }
    if (isNaN(qty) || isNaN(pincode) || isNaN(phone)) {
        alert("Please enter a numeric value for quantity.");
    }
    if (phone.length != 10) {
        alert("Please enter 10 digit phone number.");
    }
    if (pincode.length != 6) {
        alert("Please enter 6 digit pincode.");
        return false;
    }

}

