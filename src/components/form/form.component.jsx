import "./form.styles.css"
import { useState } from "react";
import { LlamarComponent } from "../llamar/llamar.component";

export function FormComponent() {

    const [totalAmount, setTotalAmount] = useState(5000);
    const [term, setTerm] = useState(3);

    const TOTAL_AMOUNT_CONFIG = {
        min: 5000,
        max: 50000
    }

    const TERM_CONFIG = {
        min: 3,
        max: 24
    }

    return <div className="formContainer">
        <p className="title" >Simulá tu crédito</p>
        <LlamarComponent setValue={setTotalAmount} needSimbol={true} value={totalAmount} title={'MONTO TOTAL'} config={TOTAL_AMOUNT_CONFIG} />
        <LlamarComponent setValue={setTerm} needSimbol={false} value={term} title={'PLAZO'} config={TERM_CONFIG} />
        <div className="result">
            <p >CUOTA FIJA POR MES</p>
            <p>$ {(totalAmount / term).toFixed(2).toString().replace('.', ',')} </p>
        </div>
        <div className="footer">
            <button >OBTENÉ CREDITO</button>
            <button>VER DETALLE DE CUOTAS</button>
        </div>
    </div>
}