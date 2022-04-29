import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = (props) => {
    console.log("Rating rendering");

    const [state, setState] = useState(props.value);

    const onClickHandler1 = () => {
        setState(1);
    }
    const onClickHandler2 = () => {
        setState(2);
    }
    const onClickHandler3 = () => {
        setState(3);
    }
    const onClickHandler4 = () => {
        setState(4);
    }
    const onClickHandler5 = () => {
        setState(5);
    }

    return (
        <div>
            <Star selected={state > 0}/>
            <button onClick={onClickHandler1}>1</button>
            <Star selected={state > 1}/>
            <button onClick={onClickHandler2}>2</button>
            <Star selected={state > 2}/>
            <button onClick={onClickHandler3}>3</button>
            <Star selected={state > 3}/>
            <button onClick={onClickHandler4}>4</button>
            <Star selected={state > 4}/>
            <button onClick={onClickHandler5}>5</button>
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