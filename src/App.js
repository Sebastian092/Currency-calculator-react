
import Form from "./Form";
import { useState } from 'react';
import currencies from "./Form/currencies.js";

function App() {
  const [result, setResult] = useState("");

  const finalResult = (currency, amount) => {
    const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <div>
      <Form
        finalResult={finalResult}
        result={result}
      />
    </div>
  );
}

export default App;
