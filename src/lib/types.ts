export interface InputProps {
    placeholder: string,
    type: string,
    name: string,
    required: boolean,
}

export type inputData = {
    name: string,
    cardNumber: string,
    expiryMonth: string,
    expiryYear: string,
    cvc: string,
}