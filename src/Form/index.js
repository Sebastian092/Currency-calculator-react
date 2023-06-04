import "./style.css";
import { useState } from 'react';
import currencies from "./currencies";
import Result from "../Result";

const Form = ({ finalResult, result }) => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies[0].shortcut);

  const onSubmit = (event) => {
    event.preventDefault();
    finalResult(currency, amount);
  };

  return (
    <div className="body">
      <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Currency calculator</legend>
          <p>
            <label className="form__label">
              <span>Currency*</span>
              <select className="form__input"
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
            </label>
          </p>
          <p>
            <label className="form__label--input">
              <span className="form_span">Amount*</span>
              <input
                className="form__input"
                type="number"
                minLength="1"
                step="0.01"
                required
                value={amount}
                placeholder="Put the amount"
                onChange={({ target }) => setAmount(target.value)}
              />
            </label>
          </p>        
            <button className="form__button">Convert currency</button>
            <p className="form__pharagraph">Exchange rates are from google finance dated on 04.06.2023</p>
            <Result result={result} />        
        </fieldset>
      </form>
    </div>
  )
};

export default Form;
