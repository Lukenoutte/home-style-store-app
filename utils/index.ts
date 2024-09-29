export function formatCurrency(value: number, currencyCode: string) {
    const numberFormat = new Intl.NumberFormat('en-US', { 
        style: 'currency', currency: currencyCode 
    })
    return numberFormat.format(value);
}