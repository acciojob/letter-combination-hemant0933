function letterCombinations(digit) {
	if(!digit){
        return []
    }
    let map = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    }
    let result = [''];
    for (let t of digit) {
        let temp = [];
        for (let str of result) {
            for (let char of map[t]) {
                temp.push(str + char);
            }
        }
        result = temp;
    }
}

module.exports = letterCombinations;
