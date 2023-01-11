// Функция сортировки массива объектов по ключу
export const sortArrObj = (arr: any[], key: string, type: string): any[] => {
    return arr.sort((a, b) => {
        if (type === 'ASC') {
            return a[key] > b[key] ? 1 : -1;
        }

        if (type === 'DESC') {
            return a[key] < b[key] ? 1 : -1;
        }
        
        return a;
    });
}

// Функция Debounce
export function debounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
    let timeoutID: ReturnType<typeof setTimeout>;

    return function(...args: any[]) {      
      clearTimeout(timeoutID);
      
      timeoutID = setTimeout(() => fn(...args), delay);
    } as F;
}