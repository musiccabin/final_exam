export function ReservePriceMet(reservePrice, bids) {
    let output = '';
    if (bids) {
        const prices = [];
        for (const bid of bids) {
            prices.push(bid.price);
        }
        const currentPrice = Math.max(...prices);
        if (currentPrice >= reservePrice) {
            output = 'Reserve Price Met';
        } else {
            output = 'Reserve Price Not Met';
        }
    } else {
        output = 'Reserve Price Not Met';
    }
    return output;
}

export function CurrentPrice(bids) {
    let output = '';
    if (bids) {
        const prices = [];
        for (const bid of bids) {
            prices.push(bid.price);
        }
        const currentPrice = Math.max(...prices);
        output = ` | Currently at: $${currentPrice}`
    }
    return output;
}
    