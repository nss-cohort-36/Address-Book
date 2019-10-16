console.log("WHAT A GREAT DAY TO COLLECT USER INPUT!")

// Add an event listener to the Save button, and start collecting the value of each of the input fields.

const container = document.querySelector("#addressList")
console.log("container", container);

document.querySelector("#saveEntry").addEventListener("click", event => {
    // console.log("button was clicked!!!!");
    const personName = document.querySelector("#fullName").value;
    // console.log(personName)
    const address = document.querySelector("#address").value;
    // console.log(address)

    const h1Element = document.createElement("h1")
    h1Element.textContent = personName
    console.log("h1", h1Element)
    h1Element.addEventListener("mouseover", () => console.log("H1 was clicked"))

    const divElement = document.createElement("div")
    divElement.textContent = address
    console.log("div", divElement)

    const sectionElement = document.createElement("section")
    sectionElement.appendChild(h1Element)
    sectionElement.appendChild(divElement)
    console.log("section", sectionElement)

    container.appendChild(sectionElement)    
})
