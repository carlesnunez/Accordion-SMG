export default class AccordionSMG {
    constructor(handler) {
        this.handlerContainer = document.getElementById(handler);
        this.handlerElements = [...this.handlerContainer.getElementsByClassName('Accordion-handler')];
        this.atachOnClickToHandlerElements();
    }

    atachOnClickToHandlerElements() {
        this.handlerElements.forEach(element => {
            element.onclick = () => {
                element.classList.toggle('Accordion-handler--active');
                const accordionBody = element.nextElementSibling;
                accordionBody.classList.toggle('Accordion-body--is-collapsed');
            }
        });
    }

    triggerSingleElement(index) {
        this.handlerElements[index].click();
    }

    openAll() {
        this.handlerElements.forEach(element => {
            element.classList.add('Accordion-handler--oppened');
            element.nextElementSibling.classList.remove('Accordion-body--is-collapsed')
        });
    }

    closeAll() {
        this.handlerElements.forEach(element => {
            element.classList.remove('Accordion-handler--oppened');
            element.nextElementSibling.classList.add('Accordion-body--is-collapsed')
        });
    }
}