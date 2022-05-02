import React from "react";

type AccordionPropsType = {
    titleValue: string;
    accordionValue: boolean;
    setAccordionValue: (value: boolean) => void;
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.setAccordionValue}
                value={props.accordionValue}/>
            {!props.accordionValue && <AccordionBody title={props.titleValue}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string;
    value: boolean;
    onClick: (value: boolean) => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordion Title rendering")
    return (
        <h3 onClick={() => props.onClick(!props.value)}>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    title: string;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("UncontrolledAccordion Body rendering")
    return (
        <ul>
            <li>1 {props.title}</li>
            <li>2 {props.title}</li>
            <li>3 {props.title}</li>
        </ul>
    )
}

export default Accordion;