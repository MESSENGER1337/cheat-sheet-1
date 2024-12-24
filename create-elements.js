// HELPER FUNCTION____________________________________________________
function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(...className.split(' ')); // Supports multiple classes
    return element;
}
const newDiv1 = createElementWithClass('div', 'my-class');





// OBJECT.ASSIGN______________________________________________________
const newDiv2 = Object.assign(document.createElement('div'), {
    className: 'my-class',
    id: 'unique-id',
    textContent: i + 1 // Optional: Add numbers to each cell
});



