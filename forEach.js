
export function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        //console.log(items[index]);
        callback(items[index]);    // 0 ....1....
    }
}
