import React from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table';
function Dashboard({data}) {
    console.log(data)
    let dashboardData = [{
        // color: 'primary',
        // icon: 'fa-calendar',
        title: 'Customer Name',
        // value: '$40,000'

    },
    {
        // color: 'success',
        // icon: 'fa-dollar-sign',
        title: 'Invoice Id',
        // value: '$2,15,000'

    },
    {
        // isProgress:true,
        // color: 'info',
        // icon: 'fa-clipboard-list',
        title: 'Start Date',
        // value: '80'

    },
    {
        // color: 'warning',
        // icon: 'fa-comment',
        title: 'End Date',
        // value: '18'

    }]
  return <>
   <div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
   <h1 className="h3 mb-0 text-gray-800">Sales Information</h1>
   <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
     </div>
     <div className="row">
       {
        dashboardData.map((e,i)=>{
            return <Tile color={e.color}
                         icon={e.icon}
                         title={e.title}
                         value={e.value}
                         isProgress={e.isProgress}

                         key={i}
            
            />
        })

       }
     
       </div>
       <div className='row'>
        <Table striped bordered hover>
        <thead>
    <tr>
      <th>#</th>
      <th>Invoice Id</th>
      <th>Date</th>
      <th>Customer</th>
      <th>Payable Amount</th>
      <th>Paid Amount</th>
      <th>Due</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((e,i)=>{
            return<tr key={i}>
                <td>{i+1}</td>
                <td>{e.Invoice}</td>
                <td>{e.Date}</td>
                <td>{e.Customer}</td>
                <td>{e.Payable}</td>
                <td>{e.Paid}</td>
                <td>{e.Due}</td>

            </tr>
        })
    }
   
  </tbody>
            </Table> 
        </div>                                  
    
   </div>
  </>
}

export default Dashboard