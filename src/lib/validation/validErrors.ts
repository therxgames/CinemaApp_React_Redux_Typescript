export const validErrors = {
    required() {
        return 'Введите текст в поле';
    },
    minLength(value: number)  {
        return `Минимальное количество символов ${value}`;
    },
    maxLength(value: number)  {
        return `Максимальное количество символов ${value}`;
    },
    regExp()  {
        return 'Поле введено неверно';
    },
}