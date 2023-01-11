export const validRules = {
    required(value: string): boolean {
        return value.length !== 0;
    },
    minLength(value: string, length: number): boolean {
        return value.length >= length;
    },
    maxLength(value: string, length: number): boolean {
        return value.length <= length;
    },
    regExp(regExp: string, value: string): boolean {        
        return new RegExp(regExp).test(value);
    }
}