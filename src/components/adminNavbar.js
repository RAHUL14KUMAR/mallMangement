import React,{useState} from 'react'

function AdminNavbar({user}) {
    const [name,setName]=useState(user);
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
                <button class="btn btn-danger" onClick={order}>order
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{basket?.length} </span>
                </button>
            </li>
        </ul> 
        <button type="button" class="btn btn-dark mx-2" onClick={moveon}>Admin</button>
        </div>
        </div>
    </nav>
    </div>
  )
}

export default AdminNavbar
