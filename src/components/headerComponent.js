import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function HeaderComponent() {
    const navigate=useNavigate();

    const [{basket,user},dispatch]=useStateValue();

    const signOut = () => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        localStorage.removeItem("user");
        navigate("/");
    };
    const moveon=()=>{
        navigate('/adminlogin');
    }
    const Home=()=>{
        navigate('/');
    }
    const allProduct=()=>{
        navigate('/all');
    }
    const order=()=>{
        navigate('/order');
    }
    const move=()=>{
        navigate('/login')
    }
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-warning">
        <div class="container-fluid shadow-sm">
            <a class="navbar-brand" href="#">Mall Management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto position-relative left--5">
            <li class="nav-item">
                <a class="nav-link fw-bold" aria-current="page" href="#"onClick={Home}>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold" aria-current="page" href="#"onClick={allProduct}>All Products</a>
            </li>
            <li class="nav-item">
                {user&&<button class="btn btn-danger" onClick={order}>order
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{basket?.length} </span>
                </button>}
            </li>
        </ul> 
        <button type="button" class="btn btn-danger mx-2" onClick={moveon}>Admin</button>
        {!user&&<button type="button" class="btn btn-success"onClick={move} >
        login
        </button>}
        {user&&<button type='button'class='btn btn-success'onClick={signOut}>{user.message[0].username}</button>}
        </div>
        </div>
    </nav>
    </div>
  )
}

export default HeaderComponent
 