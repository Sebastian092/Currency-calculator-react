import "./style.css";
const Result = ({ result }) => (
    <div className="result">
        {result && (
            <>
                {result.sourceAmount.toFixed(2)} {result.currency} {result.sourceAmount > 0 ? " = " : ""}
                {result.targetAmount.toFixed(2)} {result.targetAmount > 0 ? " PLN " : ""}
            </>
        )}
    </div>
)

export default Result;