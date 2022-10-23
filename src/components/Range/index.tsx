import React, { FunctionComponentElement, useRef, useCallback, useState, useMemo, useEffect } from "react";
import './index.scss';

export interface IRange {
    min: number,
    max: number,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
} 

export default function Range({
    onChange,
    min,
    max,
    value,
}: IRange): FunctionComponentElement<IRange> {
    const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
    const [isChanging, setIsChanging] = useState<boolean>(false);
    const getPercent = useMemo(
        () => (value: number) => ((value - min) / (max - min)) * 100,
        [max, min]
    );
    const changeInputProgressPercentStyle = useCallback(() => {
        inputRef.current.style.setProperty(
          "--webkitProgressPercent",
          `${getPercent(Number(inputRef.current.value))}%`
        );
      }, [getPercent]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    }

    useEffect(() => {
        changeInputProgressPercentStyle();
        const inputElement = inputRef.current;

        const handleUpAndLeave = () => setIsChanging(false);
        const handleDown = () => setIsChanging(true);

        inputElement.addEventListener("mousemove", changeInputProgressPercentStyle);
        inputElement.addEventListener("mousedown", handleDown);
        inputElement.addEventListener("mouseup", handleUpAndLeave);
        inputElement.addEventListener("mouseleave", handleUpAndLeave);

        
        inputElement.addEventListener("touchstart", handleDown);
        inputElement.addEventListener("touchmove", changeInputProgressPercentStyle);
        inputElement.addEventListener("touchend", handleUpAndLeave);
        return () => {
            inputElement.removeEventListener(
            "mousemove",
            changeInputProgressPercentStyle
            );
            inputElement.removeEventListener("mousedown", handleDown);
            inputElement.removeEventListener("mouseup", handleUpAndLeave);
            inputElement.removeEventListener("mouseleave", handleUpAndLeave);

            inputElement.removeEventListener("touchstart", handleDown);
            inputElement.removeEventListener("touchmove", handleUpAndLeave);
            inputElement.removeEventListener("touchend", handleUpAndLeave)
        };
    }, [isChanging, changeInputProgressPercentStyle]);

    useEffect(() => {
        if (!inputRef?.current) return;
        changeInputProgressPercentStyle();
    }, [inputRef, changeInputProgressPercentStyle, value]);

    return <>
            <div className='range_sliderWrapper'>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    ref={inputRef}
                    className='range_slider'
                    onChange={handleChange}
                />
            </div>
    </>
}
