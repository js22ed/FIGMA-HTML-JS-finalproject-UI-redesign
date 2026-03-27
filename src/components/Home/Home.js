import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button} from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import {useNavigate} from 'react-router-dom';  /* added */  
import '../../style.css';


/*planet imports */ 
import yellowplanet from '../../yellow planet.svg'; 
import purpleplanet from '../../purple planet.svg'; 
import dbplanet from '../../dark blue planet.svg'; 
import oplanet from '../../orange planet.svg'; 
import wplanet from '../../white planet.svg'; 
import earthplanet from '../../earth planet.svg'; 
import bplanet from '../../blue planet.svg'; 
import redplanet from '../../redplanet.svg'; 


/* https://bobbyhadz.com/blog/react-onclick-redirect Thank you Borislav, for the information that helped me with the button feature */

/* https://stackoverflow.com/questions/70173579/how-i-can-apply-a-background-image-to-the-body-of-only-one-component-react#:~:text=Add%20a%20class%20to%20the%20contact%20us%20component,in%20a%20separate%20.css%20file%3A%20background-color%3A%20%27color%20name%27%3B Thank you StackOverFlow for info that would help me  fix errors on classNames. */

function Home() {


    /* added navigation to planets from button  */ 
  const navigate= useNavigate(); 


    /* Assigns each planet to a specific navigation button using the navigate constant, redirects to other pages */ 

  const planetButtonM = () =>  navigate('/Mercury'); /*added */ 
  const planetButtonE = () =>  navigate('/Earth');
  const planetButtonMA = () =>  navigate('/Mars');
  const planetButtonJ = () =>  navigate('/Jupiter');
  const planetButtonS = () =>  navigate('/Saturn');
  const planetButtonV = () =>  navigate('/Venus');
  const planetButtonN = () =>  navigate('/Neptune');
  const planetButtonU = () =>  navigate('/Uranus');

  

 /* below enables each planet.svg to become a button redirecting to another info page , using the style guide to position them on the screen*/

  return (
    <div className="App">
    <p className = 'p' > Click any planet to begin </p>
     
      <Hero>     
              <Button className= "positioned-buttonr" onClick={planetButtonMA} variant = "link" > <img src= {redplanet} /></Button>       
              <Button className= "positioned-buttonb" onClick={planetButtonU} variant = "link" > <img src= {bplanet} /></Button>
              <Button className= "positioned-buttonp" onClick={planetButtonJ} variant = "link" > <img src= {purpleplanet} /></Button>         
              <Button className= "positioned-buttony" onClick={planetButtonS} variant = "link" > <img src= {yellowplanet} /></Button>                
              <Button className= "positioned-buttono" onClick={planetButtonM} variant = "link" > <img src= {oplanet} /></Button>         
              <Button className= "positioned-buttondb" onClick={planetButtonN} variant = "link" > <img src= {dbplanet} /></Button>       
              <Button className= "positioned-buttonea" onClick={planetButtonE} variant = "link" > <img src= {earthplanet} /></Button>
              <Button className= "positioned-buttonw" onClick={planetButtonV} variant = "link" > <img src= {wplanet} /></Button>          
      </Hero>
    </div>
  );

}



export default Home;
