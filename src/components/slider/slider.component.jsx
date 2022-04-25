import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export function SliderComponent(props) {
    const { config, setValue, value } = props

    return <div style={Styles.slider}>
        <Slider
            onChange={(value) => { setValue(value) }}
            value={value}
            activeDotStyle={{
                backgroundColor: 'white',
                borderColor: 'white'
            }}
            trackStyle={{ backgroundColor: 'white', boderColor: "white" }}
            {...config}
            handleStyle={{
                borderColor: 'white',
            }}
        />
    </div>;
}

const Styles = {
    slider: {
        margin: '0 25px 0 25px'
    }
}