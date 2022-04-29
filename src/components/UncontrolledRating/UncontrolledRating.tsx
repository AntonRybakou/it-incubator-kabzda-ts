import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
}

export const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = (props) => {
    console.log("Rating rendering");

    const [state, setState] = useState<UncontrolledRatingPropsType>(props.value);

    const onClickHandler = () => {
        setState(1);
    }


    return (
        <div>
            <Star selected={props.value > 0}/>
            <button onClick={onClickHandler}>1</button>
            <Star selected={props.value > 1}/>
            <button>2</button>
            <Star selected={props.value > 2}/>
            <button>3</button>
            <Star selected={props.value > 3}/>
            <button>4</button>
            <Star selected={props.value > 4}/>
            <button>5</button>
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