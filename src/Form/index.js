import "./style.css";
import { useState } from 'react';
import currencies from "./currencies";
import Result from "../Result";

const Form = ({ finalResult, result }) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState(currencies[0].shortcut);

    const onFormSubmit = (event) => {
        event.preventDefault();
        finalResult(currency, amount);
    };

    return (
        <>
            <form
                onFormSubmit={onFormSubmit}
            >
                <span>currency*</span>
                <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.shortcut}
                            value={currency.shortcut}
                        >
                            {currency.shortcut}
                        </option>
                    ))}
                </select>

            </form>
            <form
                className="form"
                onClick={onFormSubmit}
            >
                <span>amount*</span>
                <input
                    className="form__input"
                    type="number"
                    minlength="1"
                    step="0.01"
                    required
                    value={amount}
                    placeholder="put the amount"
                    onChange={({ target }) => setAmount(target.value)}
                >
                </input>
                <button>convert currency</button>
                <Result result={result} />
            </form>
        </>
    )
};

export default Form;
