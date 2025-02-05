const endsWithChar = function ends_with_char(word, c) {
    if (c.length > 1) {
        return c.indexOf(word.slice(-1)) > -1
    }
    return word.slice(-1) === c
};
const endsWith = function ends_with(word, end) {
    return word.slice(word.length - end.length) === end
}

export { endsWith, endsWithChar }