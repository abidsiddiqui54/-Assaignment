function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love typscript'; }
    console.log('you have order a ${size}, shirt that says ${text}');
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'i need a big shirt to wear');
