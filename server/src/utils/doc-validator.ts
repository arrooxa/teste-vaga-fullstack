export function validateDoc(document: string): string | null {
    if (document.length !== 11 && document.length !== 14) return null;

    if (document.length === 11) return validateCPF(document) ? document : null;

    return validateCNPJ(document) ? document : null;
}

function validateCPF(cpf: string): boolean {
    const cpfArray = cpf.split("").map(Number);

    const sum = cpfArray.slice(0, 9).reduce((acc, value, index) => acc + value * (10 - index), 0);
    const digit1 = (sum * 10) % 11;

    if (digit1 !== cpfArray[9]) return false;

    const sum2 = cpfArray.slice(0, 10).reduce((acc, value, index) => acc + value * (11 - index), 0);
    const digit2 = (sum2 * 10) % 11;

    return digit2 === cpfArray[10];
}

function validateCNPJ(cnpj: string): boolean {
    const cnpjArray: number[] = cnpj.split("").map(Number);

    const digito1 = calculateDigit(cnpjArray.slice(0, 12));
    if (digito1 !== cnpjArray[12]) return false;

    const digito2 = calculateDigit(cnpjArray.slice(0, 13));
    return digito2 === cnpjArray[13];
}

const calculateDigit = (slice: number[]): number => {
    const initial = slice.length + 1;

    const sum = slice.reduce((acc, value, index) => acc + value * (initial - index), 0);

    const remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
};
