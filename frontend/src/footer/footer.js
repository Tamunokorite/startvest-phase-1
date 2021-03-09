import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

class footer extends React.Component {
     render(){
          return(
          <div className='footer'>
               <div className='left'>Copyright &copy; 2021 Nile Google Developers Club, Abuja</div>
               <div className='right'>Contact us <span><b>Github</b></span> <span><b>Twitter</b></span></div>
          </div>
          )
     }
}
export default footer;