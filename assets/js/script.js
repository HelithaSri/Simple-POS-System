document.getElementById("home").style.setProperty("Display","none","important");
document.getElementById("order").style.setProperty("Display","none","important");
document.getElementById("item").style.setProperty("Display","none","important");
//document.getElementById("cutomer").style.setProperty("Display","none","important");

// NavBar clicks
document.getElementById("home-click").addEventListener("click",function (){
    document.getElementById("home").style.setProperty("Display","flex","important");

    document.getElementById("order").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("cutomer").style.setProperty("Display","none","important");
});

document.getElementById("order-click").addEventListener("click",function (){
    document.getElementById("order").style.setProperty("Display","block","important");

    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("cutomer").style.setProperty("Display","none","important");
});

document.getElementById("customer-click").addEventListener("click",function (){
    document.getElementById("cutomer").style.setProperty("Display","block","important");

    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});

document.getElementById("item-click").addEventListener("click",function (){
    document.getElementById("item").style.setProperty("Display","block","important");

    document.getElementById("cutomer").style.setProperty("Display","none","important");
    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});

// Home Page div clicks
document.getElementById("home-clicks").addEventListener("click",function (){
    document.getElementById("home").style.setProperty("Display","flex","important");

    document.getElementById("order").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("cutomer").style.setProperty("Display","none","important");
});

document.getElementById("order-clicks").addEventListener("click",function (){
    document.getElementById("order").style.setProperty("Display","block","important");

    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("cutomer").style.setProperty("Display","none","important");
});

document.getElementById("customer-clicks").addEventListener("click",function (){
    document.getElementById("cutomer").style.setProperty("Display","block","important");

    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});

document.getElementById("item-clicks").addEventListener("click",function (){
    document.getElementById("item").style.setProperty("Display","block","important");

    document.getElementById("cutomer").style.setProperty("Display","none","important");
    document.getElementById("home").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});

//-------------------------------------------------------------------------------------

/* Customer Section Js - Start */

// $("#btnAddCus").prop('disabled', true);

/* Validation - Start */
/* $('#error1').css({ "display": "none" });
$('#error2').css({ "display": "none" });
$('#error3').css({ "display": "none" });
$('#error4').css({ "display": "none" });

$('#error01').css({ "display": "none" });
$('#error02').css({ "display": "none" });
$('#error03').css({ "display": "none" });
$('#error04').css({ "display": "none" });
 */
/* var regExCusID = /^(C00-)[0-9]{3,4}$/;
var RegExCusName = /^[A-z]{5,10}$/;
var RegExCusAddress = /^(No.)[0-9]{2} [A-z]{4,100}$/;
var RegExCusTP = /^(07)[0-9]{8,9}$/; */

/* var regExCusID = /^(C00-)[0-9]{3,4}$/;
var RegExCusName =/^[A-z ]{5,20}$/;
var RegExCusAddress = /^[0-9/A-z. ,]{7,}$/;
var RegExCusSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/; */

// Customer Validation Function Call - Start

/* validation(regExCusID, '#cusIdAdd', '#error1', '#cusNameAdd', '#btnAddCus');
validation(RegExCusName, '#cusNameAdd', '#error2', '#cusAddressAdd', '#btnAddCus');
validation(RegExCusAddress, '#cusAddressAdd', '#error3', '#cusSalaryAdd', '#btnAddCus');
validation(RegExCusSalary, '#cusSalaryAdd', '#error4', "#btnAddCus", '#btnAddCus');

validation(regExCusID, '#cusIdUpdate', '#error01', "#cusNameUpdate", '#btnUpdateCus');
validation(RegExCusName, '#cusNameUpdate', '#error02', '#cusAddressUpdate', '#btnUpdateCus');
validation(RegExCusAddress, '#cusAddressUpdate', '#error03', '#cusSalaryUpdate', '#btnUpdateCus');
validation(RegExCusSalary, '#cusSalaryUpdate', '#error04', '#btnUpdateCus', '#btnUpdateCus'); */

// Customer Validation Function Call - End

/* addCustomer(); */


// Customer Validation Function - Start

/* function validation(regEx, id, error, nextId, btn) {
    $(id).keyup(function (event) {
      let input = $(id).val();
      if (regEx.test(input)) {
        $(id).css({ 'border': '2px solid green', 'background-color': '#fff' });
        $(error).css({"display":"none"});
        if (event.key == "Enter") {
            $(btn).prop('disabled', false);
            $(nextId).focus();
        }
      } else {
        $(id).css({ 'border': '2px solid red', 'background-color': '#ffe6e6' });
        $(error).css({"color":"red","display":"block"});
        $(btn).prop('disabled', true);
      }
    });
} */

// Customer Validation Function - End

/* Validation - Start */

// Customer Add Function - Start

/* function addCustomer() {
    var customerObj = new CustomerObject();
    $("#btnAddCus").click(function () {

        // $("#cusTblBody > tr").off(); 

        let custId = $("#cusIdAdd").val();
        let custName = $("#cusNameAdd").val();
        let custAddress = $("#cusAddressAdd").val();
        let custSalary = $("#cusSalaryAdd").val();

        let btns =
            "<button class='btn btn-warning' data-bs-target='#updateCustomer' data-bs-toggle='modal'><i class='bi bi-arrow-clockwise'></i></button> <button class='btn btn-danger'><i class='bi bi-trash'></i></button>";

        customerObj.setCustomer(custId,custName,custAddress,custSalary,btns);
        customerDB.push(customerObj);
        console.log(customerDB);

        let nRow =
            "<tr><th>" +
            custId +
            "</th><td>" +
            custName +
            "</td><td>" +
            custAddress +
            "</td><td>" +
            custTP +
            "</td><td class='text-center'>" +
            btns +
            "</td></tr>";

        // $("#cusTblBody").append(nRow);

        // Clear input Fields
        $("#cusIdAdd,#cusNameAdd,#cusAddressAdd,#cusSalaryAdd").val("");
        
    });

} */

// Customer Add Function - End

/* Customer Section Js - End */




