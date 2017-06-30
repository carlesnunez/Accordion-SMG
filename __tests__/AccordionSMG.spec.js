import AccordionSMG from '../app/scripts/AccordionSMG';
describe('AccordionSMG module', () => {
    beforeAll(() => {
        document.body.innerHTML = `<dl class="Accordion" id="Accordion-1">
                                        <dt class="Accordion-handler">Section 1</dt>
                                        <dd class="Accordion-body Accordion-body--is-collapsed">
                                            <p>Section 1 Content...</p>
                                        </dd>
                                        <dt class="Accordion-handler">Section 2</dt>
                                        <dd class="Accordion-body Accordion-body--is-collapsed">
                                            <p>Section 2 Content...</p>
                                        </dd>
                                        <dt class="Accordion-handler">Section 3</dt>
                                        <dd class="Accordion-body Accordion-body--is-collapsed">
                                            <p>Section 3 Content...</p>
                                        </dd>
                                   </dl>`;
    });
    // The assertion for a promise must be returned.
    it('All the elements are collapsed on init', () => {
        let accordionSMGInstance = new AccordionSMG('Accordion-1');                                   
        expect(accordionSMGInstance.accordionElements[0].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);
        expect(accordionSMGInstance.accordionElements[1].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);
        expect(accordionSMGInstance.accordionElements[2].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true); 
    });

    it('On click the first accordionHandler the first accordionBody expands', () => {
        let accordionSMGInstance = new AccordionSMG('Accordion-1');                                           
        accordionSMGInstance.accordionElements[0].click();
        expect(accordionSMGInstance.accordionElements[0].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(false);
    });

    it('On call openAllAccordions all the accordion instances should be oppened', () => {
        let accordionSMGInstance = new AccordionSMG('Accordion-1');                                           
        accordionSMGInstance.openAllAccordions();
        expect(accordionSMGInstance.accordionElements[0].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(false);
        expect(accordionSMGInstance.accordionElements[1].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(false);
        expect(accordionSMGInstance.accordionElements[2].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(false);
    });

    it('On call closeAllAccordions all the accordion instances should be closed', () => {
        let accordionSMGInstance = new AccordionSMG('Accordion-1');                                           
        accordionSMGInstance.closeAllAccordions();
        expect(accordionSMGInstance.accordionElements[0].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);
        expect(accordionSMGInstance.accordionElements[1].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);
        expect(accordionSMGInstance.accordionElements[2].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);
    });

    it('On call triggerAccordionByIndex calling accordion 2(3 in ordinal) should open and when we call once again should close.', () => {
        let accordionSMGInstance = new AccordionSMG('Accordion-1');                                           
        accordionSMGInstance.triggerAccordionByIndex(2);
        expect(accordionSMGInstance.accordionElements[2].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(false);
        accordionSMGInstance.triggerAccordionByIndex(2);
        expect(accordionSMGInstance.accordionElements[2].nextElementSibling.classList.contains('Accordion-body--is-collapsed')).toEqual(true);    
});
});