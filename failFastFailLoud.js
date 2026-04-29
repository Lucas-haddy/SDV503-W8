// Silent coercion - bug factory
function totalPrice(items) {
    // items is "trusted" - caller's problem.
    return items.reduce(
        (sum, it) => sum + it.price * it.qty, 0
    );
}
/* Caller passes a corrupted item:
{price: "10", qty: 2}
Result: '010' + ... (string concat!)
No error, just wrong number.
*/

// Validate at the boundary
function totalPrice(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }
    for (const it of items) {
        if (typeof it.price !== 'number' ||
            typeof it.qty !== 'number') {
                throw new TypeError('bad item');
            }
    }
    return items.reduce(
        (sum, it) => sum + it.price * it.qty, 0
    );
}