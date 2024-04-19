import { Queue } from "../Models/Queue.js";
import { LinkedList } from "./linkedList.js";


class Agenda {
    constructor() {
        this.contacto = new Queue();
        this.contactosLinkedList = new LinkedList(); 
    }

    addContact(nombre, telefono) {
        this.contacto.enqueue({ nombre, telefono });
        this.contactosLinkedList.push({ nombre, telefono }); 
    }

    viewContacts() {
        
        return this.contactosLinkedList;
    }

    receiveContact() {
        const primerContacto = this.contacto.dequeue();
        if (primerContacto) {
            this.contactosLinkedList.shift();
        }
        return primerContacto;
    }

    searchContact(nombre) {
        let contactoEncontrado = null;
        const tempQueue = new Queue();

        while (!this.contacto.isEmpty()) {
            const contacto = this.contacto.dequeue();
            if (contacto.nombre === nombre) {
                contactoEncontrado = contacto;
            }
            tempQueue.enqueue(contacto);
        }

        while (!tempQueue.isEmpty()) {
            this.contacto.enqueue(tempQueue.dequeue());
        }

        return contactoEncontrado;
    }
}

export { Agenda };
