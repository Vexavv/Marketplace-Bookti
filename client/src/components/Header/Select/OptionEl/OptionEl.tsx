import React, { useEffect, useRef } from "react";
import type { MouseEventHandler } from "react";
import styles from './OptionEl.module.scss'
import {Option, OptionProps} from "./OptionEl.props";


const OptionEl = (props: OptionProps) => {
    const {option: { value, title }, onClick} = props;
    const optionRef = useRef<HTMLLIElement>(null);

    const handleClick = (
        clickedValue: Option["value"]
    ): MouseEventHandler<HTMLLIElement> => () => {
        onClick(clickedValue);
    };
    useEffect(() => {
        const option = optionRef.current;
        if (!option) return;
        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (document.activeElement === option && event.key === "Enter") {
                onClick(value);
            }
        };

        option.addEventListener("keydown", handleEnterKeyDown);
        return () => {
            option.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, [value, onClick]);
    return (
        <li
            className={styles.Option}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
            data-testid={`select-option-${value}`}
            ref={optionRef}
        >
            {title}
        </li>
    );
};

export default OptionEl;