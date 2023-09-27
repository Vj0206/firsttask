import { useState } from "react" 
import Sidebar from "./components/sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  let [data,setData] = useState([
    {
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000"

    },
    {
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000"    
    },
    {
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000" 

    },{
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000" 
    },{
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000" 
    },{
      Invoice:"AHGA68",
      Date:"22/02/2022",
      Customer:"Jacob Marcus",
      Payable:"$100",
      Paid:"$000",
      Due:"$000" 
    }
  ])
  return<>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/Edit' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    

  </div>
  </>
}

export default App