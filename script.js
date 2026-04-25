/* BUG BASKET - Security Logic
   Challenge: Logical Parameter Tampering
*/

const _0x1a2b = ['\x50\x53\x4e\x41\x43\x45\x54\x7b\x48\x34\x43\x43\x43\x4b\x45\x45\x52\x52\x52\x5f\x42\x55\x31\x31\x5f\x48\x34\x76\x33\x5f\x54\x68\x35\x7d'];
let balance = 100;

function checkOut(id, qty) {
    // The "Flag" item is hidden with ID 1337
    let unitPrice = (id === 1337) ? 1000000 : (id * 5 + 10);
    
    // VULNERABILITY: Math allows negative numbers to flip the balance
    let cost = unitPrice * qty;
    
    if (balance >= cost) {
        balance -= cost;
        document.getElementById('balance').innerText = balance;
        
        if (id === 1337) {
            alert("ADMIN ACCESS GRANTED: " + _0x1a2b[0]);
        } else {
            console.log("Item " + id + " purchased successfully.");
        }
    } else {
        alert("Transaction Failed: Insufficient Credits!");
    }
}
