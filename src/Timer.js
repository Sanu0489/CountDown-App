import { useEffect, useState } from "react";

const Timer = ({ maxRange }) => {

    const [counter, setCounter] = useState(maxRange);

    useEffect(() => {
        if (counter > 0) {
            var count = setTimeout(() => {
                setCounter(counter - 1);
            }, 1000)
        }
    }, [counter])

    return (
        <span>
            <p>{counter > 0 ? <h2 style={{ color: "green" }}>Please Enter the OTP</h2>
                : <h2 style={{ color: "red" }}>Times Up</h2>}</p>
            {counter} Secs Remaining
        </span>
    )
}

export default Timer;