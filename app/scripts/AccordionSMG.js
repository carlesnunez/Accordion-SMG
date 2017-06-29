/**
 * AccordionSMG is a library that let's you build an accordion menu wherever you want
 */
export default class AccordionSMG {
    /**
     * @constructor
     * @param {String} accordionContainerId - Id of the div that will wrap all our accordion and elements
     */
    constructor(accordionContainerId) {
        this.accordionContainer = document.getElementById(accordionContainerId);
        this.accordionElements = [...this.accordionContainer.getElementsByClassName('Accordion-handler')];
        this.atachOnClickToAccordionElements();
    }

    /**
     * This function is the responsable to get the accordion element handlers and attach to
     * them the actions to perform on a user click.
     * @function
     */
    atachOnClickToAccordionElements() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.onclick = () => {
                accordionHandler.classList.toggle('Accordion-handler--active');
                const accordionBody = accordionHandler.nextElementSibling;
                accordionBody.classList.toggle('Accordion-body--is-collapsed');
            }
        });
    }

    /**
     * This function will trigger a single accordion given an index.
     * The index must be the number of the desired accordion to be trigged counting from 0
     * 
     * @function
     * @param {Number} index - The index in the same order as are displayed
     */
    triggerAccordionByIndex(index) {
        this.accordionElements[index].click();
    }

    /**
     * Will dispatch all the accordions opening them
     * @function
     */
    openAllAccordions() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.classList.add('Accordion-handler--oppened');
            accordionHandler.nextElementSibling.classList.remove('Accordion-body--is-collapsed')
        });
    }

    /**
     * Will dispatch all the accordions closing them
     * @function
     */
    closeAllAccordions() {
        this.accordionElements.forEach(accordionHandler => {
            accordionHandler.classList.remove('Accordion-handler--oppened');
            accordionHandler.nextElementSibling.classList.add('Accordion-body--is-collapsed')
        });
    }
}