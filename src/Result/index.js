const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                {result.sourceAmount} {result.currency}&nbsp;=&nbsp;
                {result.targetAmount} PLN
            </>
        )}
    </p>
)

export default Result;