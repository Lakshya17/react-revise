import { useEffect, useState } from "react";

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res) => res.json())
        .then(data => setData(data) )
    }, [])
    return(
        <>
            <div>Followers: {data.followers} </div>
        </>
    )
}

export default Github;