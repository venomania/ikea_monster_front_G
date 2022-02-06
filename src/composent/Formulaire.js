
import react from "react";
import httpClient from 'react-http-client';
import { useNavigate } from 'react-router-dom';

const Formulaire = () => {
    const navigate = useNavigate();

    const go = () => {
        var email = document.getElementById("mail").value;
        var name = document.getElementById("Nom").value;
        var address = document.getElementById("adresse").value;

        if (email == "" || name == "" || address == "") {
            alert("rampliser touts les champs");
        } else {

            const httpHandler = require('react-http-client');

            const postResponse = httpHandler.post(
                // url
                'http://localhost:8080/api/user',
                // body
                {
                    user: {
                        "email": email,
                        'name': name
                    },
                    cart: {
                        "address": address,
                    }
                }
                // headers if any
            ).then(data =>{
                console.log(data.data.cart_id);
                 localStorage.setItem('cart_id', data.data.cart_id);
                 navigate('/payemnt');
            } );
        }
    }


    return (
        <div>

            <div className="parallax fond">
                <div className="wrapper_2">
                    <div className="five_1">
                    </div>
                    <div className="five_2 card">
                        <label htmlFor="" className="black">EMAil : </label>
                        <input type="email" name="" id="mail" /><br />
                        <label htmlFor="" className="black">Nom : </label>
                        <input type="text" name="" id="Nom" /><br />
                        <label htmlFor="" className="black">Prenom : </label>
                        <input type="text" name="" id="Prenom" /><br />
                        <label htmlFor="" className="black">adresse : </label>
                        <input type="text" name="" id="adresse" /><br />
                        <label htmlFor="" className="black">code postal : </label>
                        <input type="number" name="" id="cp" /> <br />
                        <button className="suite" onClick={go}> suivant </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulaire;