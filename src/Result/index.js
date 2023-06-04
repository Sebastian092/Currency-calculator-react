import "./style.css";
const Result = ({ result }) => (
    <div className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount} {result.currency} {result.sourceAmount > 0 ? " = " : ""}
                {result.targetAmount} {result.targetAmount > 0 ? " PLN " : ""}
            </>
        )}
    </div>
)

export default Result;