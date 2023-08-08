import { useState } from "react";
import "./Displayer.css";
const Displayer = () => {
    //const msg="hello";
    const [first, updateFirst] = useState();
    const [last, updateLast] = useState();
    const [msg, updateMsg] = useState();

    const update1 = (event) => {
        updateFirst(event.target.value)
    }
    const update2 = (event) => {
        updateLast(event.target.value)
    }
    const update3 = (event) => {
        event.preventDefault();
        updateMsg(first +" "+ last);
    }


    return (
        <>
            <h1 style={{ fontSize: "60px" }}>{msg}</h1>

            <div className="box">
                <h1>Displayer<span style={{ color: "blue" }}> by Form</span></h1>
                <form>
                    <div style={{ height: "fit - content", display: "flex", flexDirection: "column", gap: "15px", }}>
                        <input type="text" placeholder="ENTER YOUR FIRST NAME" onChange={update1}></input>
                        <input type="text" placeholder="ENTER YOUR LAST NAME" onChange={update2}></input>
                        <button className="button70" onClick={update3}>Submit</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Displayer;