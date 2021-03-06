# LIBRARY EXAMPLE [HERE](https://carlesnunez.github.io/Accordion-SMG/)

# CODE COVERAGE OF THE LIBRARY [HERE](https://carlesnunez.github.io/Accordion-SMG/coverage/lcov-report/index.html)

# Accordion-SMG
A simple vanillaJS based accordion library

## How to install

Run this three commands:
```ssh
npm install

webpack

webpack-dev-server
```

After that connect to http://localhost:8080

## How to run tests?

```ssh
npm test
```
## How does it works?

- STEP 1 To generate your accordion menu you need to have an HTML structure like this:
```html
    <dl class="Accordion" id="Accordion-1">
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
    </dl>
```
The id could be whatever you want but the handler and body clases must be as follows.
 - STEP 2 You should require and instantiate a new AccordionSMG like in this example:
 
 ```javascript
 import AccordionSMG from './AccordionSMG';
 const mainAccordion = new AccordionSMG('Accordion-1');
 ```
Note that Accordion-1 is our html ID

## AccordionSMG functions:

**atachOnClickToAccordionElements():**

This function is the responsable to get the accordion element handlers and attach to them the actions to perform on a user click.
Use it in order to update your accordion click handlers, for example on hot accordion elements appear in the menu.
 
**triggerAccordionByIndex({Number accordionIndex}):**

This function will trigger a single accordion given an index. The index must be the number of the desired accordion to be trigged counting from 0

**openAllAccordions():**

Will dispatch all the accordions opening them


**closeAllAccordions():**

Will dispatch all the accordions closing them
