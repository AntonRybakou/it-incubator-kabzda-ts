import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    const [state, setState] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setState(!state)}}/>
            {!state && <AccordionBody title={props.titleValue}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordion Title rendering")
    return (
        <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
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