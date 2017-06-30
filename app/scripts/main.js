import AccordionSMG from './AccordionSMG';

/**     
 * We create our instance of accordion object passing the id of the group of 'Accordions' that will handle our actions
 * this will give to us the flexibility to have more than one accordion group
 */
const mainAccordion = new AccordionSMG('Accordion-1');


// BONUS HERE re-ataching an event to the dom element to don't add innecessary logic to our custom accordion lib.
mainAccordion.accordionElements[3].addEventListener('click', (event) => {
    const shouldNotFetchNewData = event.target.nextElementSibling.classList.contains('Accordion-body--is-collapsed');

    // If we are oppening (not closing) the accordion we should load data.
    if (!shouldNotFetchNewData) {
        //Showing loading message.
        event.target.nextElementSibling.innerHTML = 'Loading...';
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //If request is OK
            if (this.readyState == 4 && this.status == 200) {
                event.target.nextElementSibling.innerHTML = this.responseText;
            } else {
                event.target.nextElementSibling.innerHTML = 'Contact with support, error happened';
            }
        };
        // Calling a simple txt file to load async data.
        xmlhttp.open("GET", "ajaxText.txt", true);
        xmlhttp.send();
    }
})