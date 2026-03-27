import React from 'react';
import {Card} from 'react-bootstrap';
import planets from '../../planets3group.svg';
import '../../style.css';

const mars = () => {
    return (
        <div>       
            <h1 className = "colors">Mars  </h1>
        
            <Card className= "card-largeMars" >
    
                <p className='p'>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor montes dictum ullamcorper, hendrerit luctus quam. Volutpat mus aptent suscipit lobortis molestie suspendisse ridiculus leo. Sociosqu ex erat vitae ante ornare. Erat scelerisque egestas dictum est vitae sociosqu finibus efficitur. Imperdiet laoreet turpis tortor semper, pellentesque est. Platea nascetur ullamcorper curabitur primis donec. Montes nulla libero torquent arcu cubilia. Lobortis habitant nibh accumsan libero accumsan.</p>

            </Card>
            <img 
              src={planets}
              width="400"
              height="400"
              className="rotate"
            />
            
        </div>
    );
    
};



export default mars;