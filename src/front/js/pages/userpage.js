import React ,{useState, useEffect} from "react";
import "../../styles/userpage.css";
import { Button, Collapse, Card, CardBody } from 'reactstrap';


const Userpage = () =>{
    const [openPanel, setOpenPanel] = useState(null);
    const name = localStorage.getItem('username')
    const gmail = localStorage.getItem('gmail')
    const image = localStorage.getItem('image')

    const userData = JSON.parse(localStorage.getItem('userData'));


    const togglePanel = (panel) => {
        if (openPanel === panel) {
          setOpenPanel(null);
        } else {
          setOpenPanel(panel); 
        }
      };

    useEffect(()=>{
        togglePanel("Items")
    },[])
    return(
       <div className="container-fluid m-0 p-0">
            <div className="col-md-11 m-0 p-0" id="user-wallpaper">
                <img src="https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-wallpaper"/>
            </div>

            <div className="row mx-0 " id="dashboard">
                <div className="col-md-3  offset-md-1 p-0" id="userProfile">
                    <header id="userImage">
                        <img src={image || userData.image} alt="user-image" />
                        <h3 className="mt-3">{name || userData.username}</h3>
                        <h4>{gmail || userData.email}</h4>
                    </header>
                    <main className="userInfo">
                            <section className="d-flex flex-row justify-content-between featuresUser">
                                <p >Añadidas al carrito</p>  
                                <span>10</span>     
                            </section>
                            <section className="d-flex flex-row justify-content-between featuresUser">
                                <p >Añadidas al carrito</p>  
                                <span>10</span>     
                            </section>
                            <section className="d-flex flex-row justify-content-between featuresUser">
                                <p >Añadidas al carrito</p>  
                                <span>10</span>     
                            </section>
                    </main>
                    <footer className="text-center">
                        <button className="btn btn-dark my-4">Borrar mi cuenta</button>
                    </footer>
                </div>
                <div className="col-md-6 offset-md-1 " id="userItems">
                    <div className="row d-flex aling-items-center justify-content-center">
                        <div className="col-md-11">
                            <div className="row">
                                <div className="row  d-flex flex-row  justify-content-between mt-3 py-2 mb-3 mx-0" id="collapseBtns">

                                        <Button color="secondary" className="col-md-2 btnItem"  onClick={() => togglePanel('Items')}>
                                            Items
                                        </Button>
                                        <Button color="secondary" className="col-md-2 btnItem"    onClick={() => togglePanel('Carrito')}>
                                            Carrito
                                        </Button>
                                        <Button color="secondary" className="col-md-2 btnItem"  onClick={() => togglePanel('Compras')}>
                                            Compras
                                        </Button>
                                        <Button color="secondary" className="col-md-2 btnItem "  onClick={() => togglePanel('AboutMe')}>
                                            About Me
                                        </Button>
                                </div>
                            </div>

                            <Collapse isOpen={openPanel === 'Items'}>
                                <Card>
                                <CardBody>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                                impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                                quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                                On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source
                                de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem
                                Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une
                                    distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du
                                    français standard. De nombreuses suites logicielles de mise en page ou éditeurs de site
                                    s Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira 
                                </CardBody>
                                </Card>
                            </Collapse>

                            <Collapse isOpen={openPanel === 'Carrito'}>
                                <Card>
                                <CardBody>
                                    Some placeholder content for the 'Favorites' panel.
                                </CardBody>
                                </Card>
                            </Collapse>
                            <Collapse isOpen={openPanel === 'Compras'}>
                                <Card>
                                <CardBody>
                                    Some placeholder content for the 'Favorites' panel.
                                </CardBody>
                                </Card>
                            </Collapse>

                            <Collapse isOpen={openPanel === 'AboutMe'}>
                                <Card>
                                <CardBody>
                                    Some placeholder content for the 'About Me' panel.
                                </CardBody>
                                </Card>
                            </Collapse>        
                        </div>
                    </div>
                    </div>
            </div>
       </div>
    )
}

export default Userpage