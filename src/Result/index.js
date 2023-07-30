import { Container } from "./styled"

const Result = ({ result }) => (
    <Container>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)} {result.currency} {result.sourceAmount > 0 ? " = " : ""}
                {result.targetAmount.toFixed(2)} {result.targetAmount > 0 ? " PLN " : ""}
            </>
        )}
    </Container>
)

export default Result;