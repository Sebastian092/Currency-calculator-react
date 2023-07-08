import { ResultDiv } from "./styled"

const Result = ({ result }) => (
    <ResultDiv>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)} {result.currency} {result.sourceAmount > 0 ? " = " : ""}
                {result.targetAmount.toFixed(2)} {result.targetAmount > 0 ? " PLN " : ""}
            </>
        )}
    </ResultDiv>
)

export default Result;