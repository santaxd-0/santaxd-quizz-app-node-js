export type Id = number & {
    readonly __brand: unique symbol;
};
export declare const createId: (value: number) => Id;
//# sourceMappingURL=custom-types.d.ts.map