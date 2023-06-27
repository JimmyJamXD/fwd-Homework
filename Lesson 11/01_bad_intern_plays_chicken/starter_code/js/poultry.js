
function validateOrderQty(e){
    console.log("san");
    e.preventDefault();

    // Get the requested quantity
    let orderQty = document.getElementById('pbeOrderQty').value;
    orderQty = parseInt(orderQty);

    // If quantity is above or below the allowed then show alert message
    if(orderQty < 10 || orderQty > 200){
        alert("Please limit your order to a quantity between 10 and 200.");
    }else{
            // Show acceptance alert message if allowed quantity
        alert("Your order has been submitted");
    }


}




document.addEventListener('DOMContentLoaded', function(event) {

document.querySelector('#pbeOrderSubmit').addEventListener('click',validateOrderQty);

document.querySelector('#pbeDescCharacteristics header').addEventListener('click',function(e){
    console.log("history");
    e.preventDefault();
    document.getElementById('pbeDescCharacteristics').classList.toggle('pbeDescAccordionCollapsed');
});

document.querySelector('#pbeDescHistory header').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementByID('pbeDescHistory').classList.toggle('pbeDescAccordionCollapsed');
});

});
