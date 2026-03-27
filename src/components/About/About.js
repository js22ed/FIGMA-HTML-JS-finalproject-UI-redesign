import React from 'react';
import {Card} from 'react-bootstrap';
import planet from '../../about planet group.svg';

import '../../style.css';

const about = () => {
    return (
        <div>

            
            <h1 className='p '>About</h1>
            
            <Card className= "card-large"

           
                
            >
                
                
                <p className='p '> Figma Prototype Link : https://www.figma.com/proto/Es8qbH6xCm84iYQcJJCWzK/UI-FINAL-DESIGN---IASC2P03?node-id=0-1&t=PIqGmGkKhwySWKpg-1 <br/> 
                    <br/>
                    My application is called SOLARTARIUM and is a information destination for users to learn about the planets in our solar system. The websites home page follows as an artistic styled view into our solar system, following a similarity law model with the milky way and bright planets in which users can easily understand and draw focus to the 8 different planets. Each colorful circle represents a different planet in the solar system. Each is interactive and redirects you to the specific planets information page once clicked on. The planets are lined up in order from closest to the sun (left) to furthest (right). The user interface is quite minimalistic and simple, I wanted users ranging from kids to elders to be able to simply access this website without much difficulty in learning. From the about page to the specific planet pages, the layout was kept very similar, so users can easily use and understand the similarities and differences. The planets are color coded and do not exactly match the real planets color, but are similar enough in which users can have a bright colorful page to keep them engaged as well as offer easier differentiation from each planet for the younger and older audience. The graphics on each planet page and the about page is an artistic design meant to model the planet and the two closest ones. Using the law of uniform connectivity allows for the graphics to visually maintain connected to help the audience understand the design. Each button should redirect you to the following planet in order (on Figma). The rest of the interface follows as users can be directed to the home page through pressing the logo. There is also a menu bar in which users can directly jump to a specific planet through the drop down feature. Overall I wanted to create a simple, artistic approach to learning about our planets. It is hopefully meant to attract all ages, as it offers a fun, easy, and colorful way to learn. Simple features and functions that are straight to the point allow this application to flow so beautifully. 
</p>
                
               
            </Card>
            <img
              src={planet}
              width="400"
              height="300"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </div>
    );
    
};



export default about;