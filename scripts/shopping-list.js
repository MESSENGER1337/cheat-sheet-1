// Select DOM elements
const list = document.querySelector("ul");                // List to hold items
const input = document.querySelector("input");           // Input field for new items
const btn = document.querySelector("button");           // Button to add items

// Helper function to create a list item
const createListItem = (text) => {
    const item = document.createElement("li");           // Create list item
    const span = document.createElement("span");         // Span to hold text
    const delBtn = document.createElement("button");     // Button to delete item

    span.textContent = text;                              // Set span text to input value
    delBtn.textContent = "Delete";                       // Set delete button text
    delBtn.setAttribute("aria-label", `Delete item: ${text}`); // Add accessibility label

    delBtn.addEventListener("click", () => {             // Add click listener to delete button
        item.classList.add("removing");                  // Add class for animation
        setTimeout(() => item.remove(), 300);             // Remove item after animation
    });

    item.appendChild(span);                               // Append span to list item
    item.appendChild(delBtn);                             // Append delete button to list item

    return item;                                          // Return the complete list item
};

// Add event listener to the button
btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;               // Prevent adding empty items

    const newItem = createListItem(input.value);          // Create a new list item
    list.prepend(newItem);                                // Add the new item to the top of the list

    input.value = "";                                    // Clear the input field
    input.focus();                                        // Refocus the input field for the next entry
});

// Optional: Add some CSS for animations
const style = document.createElement("style");
style.textContent = `
    li { transition: opacity 0.3s ease, transform 0.3s ease; }   /* Smooth transitions */
    li.removing { opacity: 0; transform: translateX(-20px); }    /* Animation for removal */
    button { margin-left: 10px; }                                /* Space for delete button */
    button:hover { background-color: red; color: white; }        /* Highlight delete button on hover */
`;
document.head.appendChild(style);