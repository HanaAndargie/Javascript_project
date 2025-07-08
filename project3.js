const prompt = require("prompt-sync")()

function printInfo(params) {
    console.log("Contact Managment System");
    console.log("------------------------");
    console.log("1.Add a Contact");
    console.log("2.Delete a Contact");
    console.log("3.View Contacts");
    console.log("4.Searh Contacts");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Name: ");
    const email = prompt("Email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Added!");
}

function deleteContact(params) {
    console.log("Contact IDs");
    for (let i = 0; i < contacts.length; i++) {
        const contat = contacts[i];
        console.log((i + 1).toString() + ":", contact.name);

    }
    const number = parseInt(prompt("Enter an ID: "))
    if (isNaN(number) || number > contacts.length) {
        console.log("Invalid");
        return
    }
    contacts.splice(number - 1, 1)
    console.log("Removed");
}

function viewContact(contacts) {
    for (let contact of contacts) {
        console.log('Name:', contact.name);
        console.log('email:', contact.email);
    }
}

function searchContat() {
    const searchString = prompt("Searh: ").toLowerCase()
    const result = []

    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(searchString)) result.push(contact)
    }
    viewContact(result)
}

const contacts = []
let keepgoing = true;

printInfo()

while (keepgoing) {
    const number = prompt("Enter an opeation (1-5): ")
    console.log(object);
    switch (number) {
        case "1":
            addContact()
            break;
        case "2":
            deleteContact()
            break;
        case "3":
            viewContact(contacts)
            break;
        case "4":
            searchContat()
            break;
        case "5":

            break;

        default:
            console.log("Unknown.");
            break;
    }
}