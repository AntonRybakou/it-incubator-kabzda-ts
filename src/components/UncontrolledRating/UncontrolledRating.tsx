import React, {useState} from "react";

type UncontrolleRatingPropsType = {}

export const UncontrolledRating: React.FC<UncontrolleRatingPropsType> = (props) => {
    console.log("Rating rendering");

    const [state, setState] = useState(0);

    return (
        <div>
            <Star selected={state > 0} setState={setState} value={1}/>
            <Star selected={state > 1} setState={setState} value={2}/>
            <Star selected={state > 2} setState={setState} value={3}/>
            <Star selected={state > 3} setState={setState} value={4}/>
            <Star selected={state > 4} setState={setState} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    value: 0 | 1 | 2 | 3 | 4 | 5;
    setState: (newState: 0 | 1 | 2 | 3 | 4 | 5) => void;
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={ () => {props.setState(props.value)} }>
        {props.selected ? <b>star </b> : `star `}
    </span>
}