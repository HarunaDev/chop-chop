import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../api"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Banner from "../components/Banner"
import Footer from "../components/Footer"

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
                
                    <Link to="">
                        <motion.button className="mx-auto border-4 border-[green] p-8 rounded text-4xl font-bold text-[green]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                         whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>Create your order</motion.button>
                    </Link>
                } />
            <Footer />
        </>
    )
}

export default Order