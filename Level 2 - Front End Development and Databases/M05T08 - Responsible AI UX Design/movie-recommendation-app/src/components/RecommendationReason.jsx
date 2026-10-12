import { useState } from "react";

function RecommendationReason(){
    const [showReason, setShowReason] = useState(false);

    return (
        <div>
            <button onClick={() => setShowReason(!showReason)}>
                Why am I seeing this?
            </button>
            {showReason && (
                <p>Recommended because you have watched certain type of movies</p>
            )}
        </div>
    )


}

export default RecommendationReason;