import React, {useState} from "react";

type UncontrolleRatingPropsType = {}

export const UncontrolledRating: React.FC<UncontrolleRatingPropsType> = (props) => {
    console.log("Rating rendering");

    const [state, setState] = useState(0);

    return (
        <div>
            <Star selected={state > 0} setState={() => setState(1)}/>
            <Star selected={state > 1} setState={() => setState(2)}/>
            <Star selected={state > 2} setState={() => setState(3)}/>
            <Star selected={state > 3} setState={() => setState(4)}/>
            <Star selected={state > 4} setState={() => setState(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    setState: () => void;
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => {
        props.setState()
    }}>
        {props.selected ? <b>star </b> : `star `}
    </span>
}