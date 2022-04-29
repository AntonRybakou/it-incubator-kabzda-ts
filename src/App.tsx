import React from 'react';
import './App.css';
// import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log("App rendering");
    return (
        <div>

            <OnOff value={false}/>
            <hr/>

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<hr/>*/}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <hr/>

            <UncontrolledRating value={2}/>
            //<UncontrolledRating value={4}/>

            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering");
    return <h1>{props.title}</h1>
}

export default App;
