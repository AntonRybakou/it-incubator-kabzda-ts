import React from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    const collapsed= true;

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button>TOGGLE</button>
            { !collapsed && <AccordionBody title={props.titleValue}/> }
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordion Title rendering")
    return (
        <h3>-- {props.title} --</h3>
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

export default UncontrolledAccordion;