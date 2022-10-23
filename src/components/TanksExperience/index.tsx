import React, { FunctionComponentElement } from 'react';
import Tank from '../Tank';
import styles from './index.module.scss';

export default function TankExperience(): FunctionComponentElement<void> {
    const tankNumber: Array<number> = Array.from(Array(3).keys());
    return <div className={styles.container}>
        {tankNumber.map((key) => (
            <div key={key}>
                <Tank placement='bottom'/>
            </div>
        ))}
        {tankNumber.map((key) => (
            <div key={key}>
                <Tank placement='top'/>
            </div>
        ))}
    </div>
}
