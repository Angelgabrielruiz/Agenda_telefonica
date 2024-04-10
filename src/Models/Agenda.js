import { Queue } from "../Models/Queue.js";

class Agenda {
    constructor() {
        this.contacto = new Queue();
    }

    addContact(nombre, telefono) {
        this.contacto.enqueue({ nombre, telefono });
    }

    viewContacts() {
        const contactos = [];
        const tempQueue = new Queue();

        while (!this.contacto.isEmpty()) {
            const contacto = this.contacto.dequeue();
            contactos.push(contacto);
            tempQueue.enqueue(contacto);
        }

        while (!tempQueue.isEmpty()) {
            this.contacto.enqueue(tempQueue.dequeue());
        }

        return contactos;
    }

    receiveContact() {
        return this.contacto.dequeue();
    }

    searchContact(nombre) {
        const tempQueue = new Queue();
        let contactoEncontrado = null;

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
