export function formatPrice(lang: string, price: any) {
    if(lang == "bg" || lang === undefined) return (Number(price) / 100).toFixed(2) + " лв.";
    return ((Number(price) / 100)/2).toFixed(2) + " €";
}