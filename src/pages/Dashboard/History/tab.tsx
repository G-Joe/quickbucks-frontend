import React from 'react'
import "./index.scss"

const TabHeader = () => {
    return (
      <thead className="head">
          <tr>
              <td><input type="checkbox"/></td>
              <td>Date</td>
              <td>Loan type</td>
              <td>Amount</td>
              <td>Status</td>
          </tr>
      </thead>
    )
  }

  const TabBody = () =>{
    return (
        <tbody>
        <tr>
            <td><input type="checkbox"/></td>
            <td>2/11/2022</td>
            <td>Payday loan</td>
            <td>N200,000</td>
            <td><button  className="active">Active</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>3/11/2022</td>
            <td>Payday loan</td>
            <td>N300,000</td>
            <td><button className="reversed">Reversed</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>3/11/2022</td>
            <td>Payday loan</td>
            <td>N400,000</td>
            <td><button className="liquidated">Liquidated</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>4/11/2022</td>
            <td>Payday loan</td>
            <td>N500,000</td>
            <td><button className="failed">Failed</button></td>
        </tr>
        </tbody>
    )
  }
  

const Tab = () => {
  return (
    <div>
        <table className="history-table">
            <TabHeader/>
            <TabBody/>
        </table>
    </div>
   
  )
}

export default Tab