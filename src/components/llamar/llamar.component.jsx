import "./llamar.styles.css"
import { InputComponent } from "../input/input.component";
import { SliderComponent } from '../slider/slider.component';

export const LlamarComponent = (props) => {

    const { title, setValue, value, config, needSimbol } = props;

    return <div className="totalAmountContainer">
        <div className="totalAmountHeader">
            <p className="totalAmountTitle"> {title}  </p>
            <InputComponent needSimbol={needSimbol} setValue={setValue} value={value} config={config} />
        </div>
        <SliderComponent className="slider" config={config} setValue={setValue} value={value} />
        <div className="amount">
            <p>{config.min}</p>
            <p>{config.max}</p>
        </div>
    </div>
}