import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../api"
import { Link } from 'react-router-dom'
import Banner from "../components/Banner"

function Order() {
    // state to hold user
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])

    // function to make api call and get user
    const getUser = () =>{
        api
        .get("/api/user/")
        .then((res) => res.data)
        .then((data) => {
            setUser(data.username)
        })
        .catch((err) => alert(err))
    }

    return (
        <>
            <NavBar user={user} url="/" text="Home" />
            <Banner orderUrl="#Menu" orderText="Go to Menu" banner={
                <div>
                    <h1>Welcome to Choji chop shop</h1>
                    <Link to="">
                        <button>Create your order</button>
                    </Link>
                </div>} />
        </>
    )
}

export default Order