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

    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${address}</div>
        </section>
    `
})




