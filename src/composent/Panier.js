import react from "react";
import achat from '../achat.png';
import './panier.css'
import back from '../icons8-back-48.png';


const panier = () => {
    const Panier = JSON.parse(localStorage.getItem("panier"));
    if(!Panier){
        return(
            <div>
                  <div id='contBack'>
                    <a href="/"><img src={back} alt="" id='back' /></a>
                </div>
                <h1>Panier Vide</h1>
            </div>
        )
    }
    var total = Number(0);
    for (var index = 0; Panier[index]; index++) {
        var recup = Number(0);

        console.log('index:', index, 'valeur:', Panier[index]);

        recup = Number(Panier[index].Price);

        if (Panier[index].Price == null) {
            recup = Number(0);
        }
        total = Math.round(total + recup);
    }

    console.log(total);

    return (

        <div className="wrapper_2">
            <div className="five_1">
                <div id='contBack'>
                    <a href="/"><img src={back} alt="" id='back' /></a>
                </div>
            </div>
            <div className="five_2">
                <table>
                    <tbody>
                        {Panier.map((p) =>
                            <tr key={p.id}>
                                <td><img src={p.image} alt="" className="image" /></td>
                                <td colspan="2">{p.Article}  {p.color}</td>
                                <td>{p.Price} €</td>
                            </tr>

                        )}

                    </tbody>
                </table>
                <div className="trai"></div>
                <div>
                    <h4> Prix Total : {total}€ </h4>
                    <a href="/Formulaire"><button>Payer</button></a>
                </div>
            </div>
            <div className="five_3"></div>
        </div>


    )
}

export default panier;