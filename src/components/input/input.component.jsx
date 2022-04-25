import './input.styles.css';
import { useEffect } from "react";

export const InputComponent = (props) => {
    const { value, setValue, config, needSimbol } = props;
    const validateValue = (val) => {
        setValue(val < config.min ? config.min : (val > config.max ? config.max : val))
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            validateValue(value);
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [value])

    return <div className="container">
        {needSimbol &&
            <p>$</p>
        }
        <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...config}
        />
    </div>
}