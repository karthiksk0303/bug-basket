const _0x1a2b = ['\x50\x53\x4e\x41\x43\x45\x54\x7b\x48\x34\x43\x43\x43\x4b\x45\x45\x52\x52\x52\x5f\x42\x55\x31\x31\x5f\x48\x34\x76\x33\x5f\x54\x68\x35\x7d'];
let balance = 100;

function checkOut(id, qty) {
    let unitPrice = (id === 1337) ? 10000000 : (id * 7); // Flag costs 10 Million
    let cost = unitPrice * qty;

    if (balance >= cost) {
        balance -= cost;
        document.getElementById('balance').innerText = balance;

        // If they try to buy ID 1337, they must have over 1 Million left in balance
        if (id === 1337) {
            if (balance > 1000000) {
                alert("CONGRATS AUTHOR! FLAG: " + _0x1a2b[0]);
            } else {
                alert("You bought it, but you are too poor to see the flag. Get more money!");
            }
        } else {
            console.log("Item " + id + " purchased successfully.");
        }
    } else {
        alert("Transaction Failed!");
    }
}
