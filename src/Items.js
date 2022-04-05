import {useState} from "react";
import Data from "./data";


function Items(props) {
    let [val, setval ] = useState(Data);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="1"/>
                    <p>{val[0].id}</p>
                    <p>10000</p>
                </div>
            </div>
        </div>
    )
}

export default Items;