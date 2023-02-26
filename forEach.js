
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);    // 0 ....1....
    }
}
module.exports = forEach;
