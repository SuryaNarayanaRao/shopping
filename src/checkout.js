import React from 'react';
import { useNavigate } from "react-router-dom";
import{Container} from 'react-bootstrap';
import {Button} from "react-bootstrap";


function LoginLayout() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  
  return (
     <div>
       <Container/>
    </div>
  );
};

export default LoginLayout;