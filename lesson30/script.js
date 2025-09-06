function validatetheindra() {
    var myform = document.forms['OttustsukiMoonStore']

    if (myform['address'].value == 'abc') {
        alert("Enter valid id you fool")
        return
    }

    if (myform['phonenumber'].value == '123') {
        alert("Enter valid id you fool")
        return
    }
// return without saving if you entered these valuse

// else u will save ur order in database


}

