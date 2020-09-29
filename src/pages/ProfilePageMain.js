import React from "react";

import { userIsAuthenticated } from "../redux/HOCs";
import Menu from '../components/menu/Menu'







class ProfilePageMain extends React.Component {


  
  
  
  
  





  
  render() {
    
    return (
      <>
       <Menu isAuthenticated={this.props.isAuthenticated}/>
      
      </>
      
    )
    
  }
  
}


export default userIsAuthenticated(ProfilePageMain);
