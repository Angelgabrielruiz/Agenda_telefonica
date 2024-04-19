import { Agenda } from '../Models/Agenda.js';

const elements = {
    add: document.getElementById('add'),
    view: document.getElementById('view'),
    contactList: document.getElementById('contactList'),
    receive: document.getElementById('receive'),
    searchName: document.getElementById('searchName'),
    searchResult: document.getElementById('searchResult'),
    name: document.getElementById('name'), 
    tel: document.getElementById('tel'),  
    searchButton: document.getElementById('search') 
};

const agenda = new Agenda();

elements.add.addEventListener('click', addContact);
elements.view.addEventListener('click', viewContacts);
elements.receive.addEventListener('click', receiveContact);
elements.searchButton.addEventListener('click', searchContact); 

function addContact() {
    const nombre = elements.name.value;
    const telefono = elements.tel.value;
    agenda.addContact(nombre, telefono);
    clearInputFields();
}

function viewContacts() {
    const listaContactos = agenda.viewContacts();
    const contactList = elements.contactList;
    
    if (!contactList) {
        console.error("El elemento contactList no existe en el documento HTML.");
        return;
    }

    let listaContactosHTML = '';
    let currentNode = listaContactos.head;

    while (currentNode) {
        listaContactosHTML += `Nombre: ${currentNode.data.nombre} | Teléfono: ${currentNode.data.telefono}\n`;
        currentNode = currentNode.next;
    }
    
    contactList.textContent = listaContactosHTML;
}

function searchContact() {
    const nombreBuscar = elements.searchName.value;
    const contacto = agenda.searchContact(nombreBuscar);
    if (contacto) {
        elements.searchResult.textContent = `Nombre: ${contacto.nombre} | Teléfono: ${contacto.telefono}`;
    } else {
        elements.searchResult.textContent = 'Contacto no encontrado';
    }
}


function receiveContact() {
    const primerContacto = agenda.receiveContact();
    if (primerContacto) {
        alert(`Nombre: ${primerContacto.nombre} | Teléfono: ${primerContacto.telefono}`);
    } else {
        alert("No hay contactos en la lista.");
    }
}


function clearInputFields() {
    elements.name.value = '';
    elements.tel.value = '';
}
