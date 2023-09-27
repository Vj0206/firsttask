import React from 'react'

function sidebar() {
  return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
    <div className="sidebar-brand-icon rotate-n-15">
        {/* <i className="fas fa-laugh-wink"></i> */}
    </div>
    <div className="sidebar-brand-text mx-3">Medico Sales</div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <a className="nav-link" href="javascript(void)">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Setting</span>
    </a>
    
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        {/* <i className="fas fa-fw fa-wrench"></i> */}
        <span>Lab Test</span>
    </a>
   
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        {/* <i className="fas fa-fw fa-wrench"></i> */}
        <span>Appointment</span>
    </a>
   
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        {/* <i className="fas fa-fw fa-wrench"></i> */}
        <span>Medicine Order</span>
    </a>
   
</li>

<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        {/* <i className="fas fa-fw fa-wrench"></i> */}
        <span>Message</span>
    </a>
   
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        {/* <i className="fas fa-fw fa-wrench"></i> */}
        <span>Payment</span>
    </a>
   
</li>




</ul>

</>
}

export default sidebar