import { useState } from "react";

function RecommendationReason(){
    const [showReason, setShowReason] = useState(false);

    return (
        <div>
            <button onClick={() => setShowReason(!showReason)}>
                {showReason ? "Hide Recommendation reason" : "Why am I seeing this?"}
            </button>
            {showReason && (
                <div>
                    <h3>Why was this movie recommended</h3>
                    <p> This movie may have been recommended because its genre or themes match movies you have enjoyed in the past.</p>

                    <p> Recommendations are suggestions, and they may not always match your interests.</p>
                </div>
            )}
        </div>
    )


}

export default RecommendationReason;