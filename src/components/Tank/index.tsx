import React, { FunctionComponentElement, useState, useRef } from "react";
import Overlay from 'react-bootstrap/Overlay'
import TankPopover from "../TankPopover";
import Popover from 'react-bootstrap/Popover';
import './index.scss';

export interface ITank {
    placement: string;
}

export default function Tank({placement}: ITank): FunctionComponentElement<ITank> {
    const [show, setShow] = useState<boolean>(false);
    const target = useRef(null);
    const handleShow = () => setShow(!show);
    return <div className='tank_container'>
        <img className='tank_image'
            src='tank.png'
            alt='Tank'
            onClick={handleShow}
            ref={target}
        />
        <span className='tank_text'>Т-34</span>
        <Overlay
            show={show}
            target={target.current}
            placement={placement as any}
            rootClose
            rootCloseEvent='click'
            onHide={() => setShow(false)}
        >
            <Popover id='popover-positioned-bottom' className='tank_popoverWrapper'>
                <Popover.Body>
                    <TankPopover />
                </Popover.Body>
            </Popover>
        </Overlay>
    </div>;
}