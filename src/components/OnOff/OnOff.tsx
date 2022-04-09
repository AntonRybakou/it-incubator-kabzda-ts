import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    value: boolean,
}


export const OnOff: React.FC<OnOffType> = (props) => {
    // Define local state (props value "true" or "false")
    let [state, setState] = useState(props.value);
    // Set state to "false" (by pressing OFF)
    const onClickHandlerOff = () => {
        setState(false);
    }
    // Set state to "true" (by pressing ON)
    const onClickHandlerOn = () => {
        setState(true);
    }

    return (
        <div className={s.buttons}>
            <div className={state ? s.buttonGreen : s.button} onClick={onClickHandlerOn}>ON</div>
            <div className={state ? s.button : s.buttonRed} onClick={onClickHandlerOff}>OFF</div>
            <span className={state ? s.circleGreen : s.circleRed}/>
        </div>
    );
};