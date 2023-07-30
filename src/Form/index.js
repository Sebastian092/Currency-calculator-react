import { useState } from 'react';
import currencies from "./currencies";
import Result from "../Result";
import { Clock } from "../Clock";
import { Container, Legend, Label, Select, Input, Fieldset, Span, Pharagraph, Button, InputLabel, FormBody } from "./styled"

const Form = ({ finalResult, result }) => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies[0].shortcut);

  const onSubmit = (event) => {
    event.preventDefault();
    finalResult(currency, amount);
  };

  return (
    <Container>
      <FormBody onSubmit={onSubmit}>
        <Clock />
        <Fieldset>
          <Legend>Currency calculator</Legend>
          <p>
            <Label>
              <span>Currency*</span>
              <Select
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
              </Select>
            </Label>
          </p>
          <p>
            <InputLabel>
              <Span>Amount*</Span>
              <Input
                type="number"
                minLength="1"
                step="0.01"
                required
                value={amount}
                placeholder="Put the amount"
                min="0.01"
                onChange={({ target }) => setAmount(target.value)}
              />
            </InputLabel>
          </p>
          <Button>Convert currency to PLN</Button>
          <Pharagraph>Exchange rates are from google finance dated on 04.06.2023</Pharagraph>
          <Result result={result} />
        </Fieldset>
      </FormBody>
    </Container>
  )
};

export default Form;
