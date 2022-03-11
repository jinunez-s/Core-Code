//Challenge No. 1 - Build Tower
export const towerBuilder = (nFloors: number): string[] => {
    let result: string[] = [];
    let temp:string = '';
    for(let i = 1; i <= nFloors; i++){
        temp = ' '.repeat(nFloors-i) + "*".repeat(2 * i - 1) + ' '.repeat(nFloors-i);
        result.push(temp);
    }
    return result;
}