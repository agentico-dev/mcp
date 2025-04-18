declare const reverse: {
    (request: any): Promise<unknown>;
    schema: {
        type: string;
        properties: {
            message: {
                type: string;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
};
export default reverse;
export { reverse };
//# sourceMappingURL=index.d.ts.map