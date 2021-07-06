import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Container } from 'semantic-ui-react'
import './../css/sheets.css';


export default function Sheet() {
    
    const [url] = useState("https://sheet.best/api/sheets/cf930ffe-549e-42d6-a409-7ab7ddab2ba7");
    const [notificationUrl] = useState ('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/')
    const [data, setData] = useState([])

    useEffect(async () => {
        const res = await axios({ url })
        setData(res.data);
        //console.log(res)
    }, []);
    
    const updateFieldChanged = id => e => {
        var newArr = [...data]; // copying the old datas array
        const tasa = e.target.value
        newArr[id].Tasa = e.target.value; // replace rate with new rate 
        setData(newArr); 
        updateSheet(id, newArr[id]);
        sendNotification(id);
    }

    async function updateSheet(id, item) {
        fetch(url + "/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            })
        .then((r) => {
            r.json()
            //console.log(r)
        })
        .catch(console.error);
        
        return 
    }

    async function sendNotification(id) {
        var body = {
            'idOp' : data[id]['id Op'], //opId
            'tasa' : data[id]['Tasa'], //tasa modificada
            'email' : data[id]['Email'] //email donde se enviará el correo
            }
        //console.log('body', body)
        const response = await axios.post(notificationUrl, JSON.stringify(body));
        //console.log('response', response)
        return 
    }


    return (
    <Container fluid className="container">
        <h1> Sheet </h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th> Tasa</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {data.map( (element, id) => 
                <tr key={id}> 
                    <td> {element["id Op"]} </td>
                    <td> 
                        <input 
                            type="text" 
                            name="name" 
                            value={element["Tasa"]} 
                            onChange={updateFieldChanged(id)} />
                    </td>
                    <td> {element["Email"]} </td>
                </tr>
            )}
                <tr key={100}> 
                <td> {"id Op"}</td>
                <td> {"Tasa"}</td>
                <td> {"Email"}</td>
            </tr>
            </tbody>
        </table>

    </Container>
    )

}