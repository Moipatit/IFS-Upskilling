function ResponsePanel({ response }){
    return (
        <div className="response-panel">
            <h2>AI Response</h2>
            <p>{response}</p>
        </div>
    );
}

export default ResponsePanel;