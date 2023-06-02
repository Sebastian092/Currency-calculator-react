const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                {result.sourceAmount} {result.currency} {result.sourceAmount === "" ? "=" : ""}

                {result.targetAmount} {result.targetAmount === "" ? "PLN" : ""}
            </>
        )}
    </p>
)

export default Result;