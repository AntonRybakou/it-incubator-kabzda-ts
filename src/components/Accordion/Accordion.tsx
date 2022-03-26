import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={ props.title }/>
            <AccordionBody title={ props.title }/>
        </div>
    )
}

function AccordionTitle(props: any) {
    console.log("Accordion Title rendering")
    return (
        <h3>{ props.title }</h3>
    )
}

function AccordionBody(props: any) {
    console.log("Accordion Body rendering")
    return (
        <ul>
            <li>1 { props.title }</li>
            <li>2 { props.title}</li>
            <li>3 { props.title}</li>
        </ul>
    )
}

export default Accordion;