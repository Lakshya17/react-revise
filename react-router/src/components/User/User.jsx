import { useParams } from "react-router-dom";

const User = () => {

    console.log(useParams())
    const {id} = useParams()
    return(
        <>
            <div>User: {id}</div>
        </>
    )
}

export default User;