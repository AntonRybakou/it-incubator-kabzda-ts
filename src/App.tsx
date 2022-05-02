import React, {useState} from 'react';
import './App.css';
// import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionValue, setAccordionValue] = useState<boolean>(false);

    return (
        <div>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff value={false}/>*/}
            {/*<hr/>*/}
            <Accordion
                titleValue={"Menu"}
                accordionValue={accordionValue}
                setAccordionValue={setAccordionValue}/>
            {/*<hr/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            <hr/>
            <UncontrolledRating/>
            {/*<hr/>*/}
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
