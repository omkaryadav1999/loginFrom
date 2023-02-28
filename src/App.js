import React, { useState } from "react";

function App() {
    let loginInfo = {
        name: "",
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(loginInfo);
    const [data, setData] = useState([]);

    const getData = (e) => {
        setLogin((old) => { return { ...old, [e.target.name]: e.target.value } });
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!login.name || !login.email || !login.password) {
            alert("plase fill all infomation")
        } else {
            setData([...data, login])
        }
    }
    console.log(data)
    return (
        <>
            <div className="fromHolder">
                <h1>login form</h1>
                <form onSubmit={submitForm} >
                    <label htmlFor="name">name:</label>&nbsp;&nbsp;
                    <input type="text" id="name" name="name" value={login.name} onChange={getData} /><br /><br />
                    <label htmlFor="email">email</label>&nbsp;&nbsp;
                    <input type="email" id="email" name="email" value={login.email} onChange={getData} /><br /><br />
                    <label type="pass">pass:</label>&nbsp;&nbsp;
                    <input type="password" id="pass" name="password" value={login.password} onChange={getData} /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" id="submit" value="submit" />
                </form>
            </div>
        </>
    )

}

export default App



