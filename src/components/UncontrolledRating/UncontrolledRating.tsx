import React, {useState} from "react";

type UncontrolleRatingPropsType = {

}

export const UncontrolledRating: React.FC<UncontrolleRatingPropsType> = (props) => {
    console.log("Rating rendering");

    const [state, setState] = useState(0);

    return (
        <div>
            <Star selected={state > 0}/>
            <button onClick={() => {setState(1)}}>1</button>
            <Star selected={state > 1}/>
            <button onClick={() => {setState(2)}}>2</button>
            <Star selected={state > 2}/>
            <button onClick={() => {setState(3)}}>3</button>
            <Star selected={state > 3}/>
            <button onClick={() => {setState(4)}}>4</button>
            <Star selected={state > 4}/>
            <button onClick={() => {setState(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return (
            <span>star </span>
        )
    }
}