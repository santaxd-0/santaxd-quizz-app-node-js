export type Id = number & { readonly __brand: unique symbol };

export const createId = (value: number): Id => {
    return value as Id;
}