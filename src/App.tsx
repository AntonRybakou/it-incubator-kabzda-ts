import React from 'react';
import './App.css';

function Hello() {
    alert('Hello IT-KAMASUTRA');
}

Hello();


function App() {
    console.log("App rendering");
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering");
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("Accordion Title rendering")
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log("Accordion Body rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>star</div>
    )
}

export default App;
