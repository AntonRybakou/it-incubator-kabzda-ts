import React from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffType = {
    onOffValue: boolean,
    setOnOffValue: (value: boolean) => void
}


export const UncontrolledOnOff: React.FC<OnOffType> = (props) => {

    return (
        <div className={s.buttons}>
            <div className={props.onOffValue ? s.buttonGreen : s.button} onClick={() => props.setOnOffValue(true)}>ON</div>
            <div className={props.onOffValue ? s.button : s.buttonRed} onClick={() => props.setOnOffValue(false)}>OFF</div>
            <span className={props.onOffValue ? s.circleGreen : s.circleRed}/>
        </div>
    );
};