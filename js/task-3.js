// function getElementWidth(content, padding, border) {
//     const numContent = Number.parseFloat(content);
//     const numPadding = Number.parseFloat(padding);
//     const numBorder = Number.parseFloat(border);
//     const elementWidth = numContent + numPadding * 2 + numBorder * 2;
//     return elementWidth;

// }
// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));

function checkForSpam(message) {
    const newMessage = message.toLowerCase();
    const checkWord = "spam";
    const checkWord1 = "sale";
    if (newMessage.includes(checkWord) || newMessage.includes(checkWord1)) {
        return true;
    } else {
        return false;
    }

}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



