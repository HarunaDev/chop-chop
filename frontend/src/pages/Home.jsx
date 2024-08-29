import { useState, useEffect } from "react"
import api from "../api"
import NavbarDefault from "../components/NavBar"
import Banner from "../components/Banner"
import SpecialMenu from "../components/SpecialMenu"
import Service from "../components/Service"

function Home() {
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
            <NavbarDefault user={user}/>
            <Banner />
            <SpecialMenu />
            <Service />
        </>
    )
}

export default Home