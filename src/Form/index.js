import { useState, useRef } from 'react';
import Result from "../Result";
import { Clock } from "../Clock";
import {
  Container,
  Legend,
  Label,
  Select,
  Input,
  Fieldset,
  Span,
  Pharagraph,
  Button,
  InputLabel,
  FormBody,
  Loading,
  Error,
} from "./styled";
import { useData } from "../useData";

const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useData();
  const ratesDate = ratesData.date;

  const finalResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

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
          {ratesData.status === "loading"
            ?
            (
              <Loading>
                Please be patient, loading exchange rates.
              </Loading>
            )
            :
            ratesData.status === "error"
              ?
              (
                <Error>
                  Error, something went wrong.<br />
                  Please check your network or try later.
                </Error>
              )
              :
              (
                <>
                  <p>
                    <Label>
                      <span>Currency*</span>
                      <Select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                      >
                        {Object.keys(ratesData.rates).map(currency => (
                          <option
                            key={currency}
                            value={currency}
                          >
                            {currency}
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
                  <Pharagraph>Exchange rates are from exchangerate.host dated on {ratesDate}
                  </Pharagraph>
                  <Result result={result} />
                </>
              )
          }
        </Fieldset>
      </FormBody>
    </Container>
  )
};

export default Form;