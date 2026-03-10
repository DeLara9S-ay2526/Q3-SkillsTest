function checkBill(){
    let TICK_COST = 250;
    let ADMIN_FEE = 50;
    let ticketQty = Math.abs(Number(document.getElementById("qty").value))
    let subTotal = Number(TICK_COST * ticketQty).toFixed(2);
    let totalPrice = Number(Number(subTotal) + Number(50)).toFixed(2);
    document.getElementById("replace1").innerHTML = `<input type="text" id="subtotal" value="${subTotal}" readonly>`;
    document.getElementById("replace2").innerHTML = `<input type="text" id="total" value="${totalPrice}" readonly>`;
}