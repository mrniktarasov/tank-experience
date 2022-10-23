import React, { FunctionComponentElement, useState } from "react";
import Form from 'react-bootstrap/Form';
import { IComplectation, calcultaScore } from "./calculateScore";
import Range from "../Range";
import './index.scss';

export default function TankPopover(): FunctionComponentElement<void> {
    const [complectation, setComplectation] = useState<IComplectation>('elite');
    const [fights, setFights] = useState<number>(0);
    const handleChangeСomplectation = (event: React.ChangeEvent<HTMLInputElement>) => setComplectation(event.target.value as IComplectation);
    const handlerChangeFights = (event: React.ChangeEvent<HTMLInputElement>) => {
        const re = /^[0-9\b]+$/;
        if (
            event.target.value !== '' &&
            re.test(event.target.value)
        ) {
            const numValue = Number(event.target.value);
            if(numValue >= 0 && numValue <= 300) {
                setFights(numValue);
            }
        } else {
            setFights(0);
        }
    }

    const minSliderValue: number = 0;
    const maxSliderValue: number = 300;
    const score: number = calcultaScore(complectation, fights);

    return <div className='tankPopover_container'>
        <div className='tankPopover_complectation'>
            <div className='tankPopover_complectationHeader'>Комплектация</div>
            <Form className='tankPopover_complectationData'>
                <Form.Check 
                    type='radio'
                    id='default-radio-1'
                    label='Стандартная'
                    value='standard'
                    className='tankPopover_text'
                    onChange={handleChangeСomplectation}
                    checked={complectation === 'standard'}
                />
                <Form.Check
                    type='radio'
                    id='default-radio-2'
                    label='Элитная'
                    value='elite'
                    className='tankPopover_text'
                    onChange={handleChangeСomplectation}
                    checked={complectation === 'elite'}
                />
                <Form.Check
                    type='radio'
                    id='default-radio-3'
                    label='Премиумная'
                    value='premium'
                    className='tankPopover_text'
                    onChange={handleChangeСomplectation}
                    checked={complectation === 'premium'}
                />
            </Form>
        </div>
        <div className='tankPopover_experience'>
            <div className='tankPopover_expHeader'>Опыт танка</div>
            <div className='tankPopover_expData'>
                <img className='tankPopover_image'
                    src='star.png'
                    alt='Star'
                />
                <span className='tankPopover_score'>{score}</span>
            </div>
        </div>
        <div className='tankPopover_fights'>
            <div className='tankPopover_fightsHeader'>Количество боев</div>
            <Range
                min={minSliderValue}
                max={maxSliderValue}
                value={fights}
                onChange={handlerChangeFights}
            />
        </div>
        <div className='tankPopover_fightsInputWrapper'>
            <input
                type="text"
                onChange={handlerChangeFights}
                value={fights}
                className='tankPopover_fightsInput'
            />  
        </div>
    </div>;
}