import React, { FunctionComponentElement } from "react";
import styles from './index.module.scss';

export default function Description(): FunctionComponentElement<void> {
    return <div className={styles.description}>
        <div className={styles.experience}>Опыт танков</div>
        <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut a arcu faucibus, ultricies elit ac, viverra metus. 
            Aliquam molestie felis id consequat convallis. Donec sed nulla 
            consectetur, ultricies sem ac, varius erat. Pellentesque vitae 
            erat ut felis lacinia rhoncus eu in est.
        </div>
    </div>
}
