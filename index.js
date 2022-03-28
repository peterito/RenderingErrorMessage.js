// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error". 

let purchaseItem = document.getElementById('purchase-btn')
let errorMessage = document.getElementById('error')

function purchase(){
    errorMessage.textContent = "Something went wrong, please try again"
}



