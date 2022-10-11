import React from 'react'
import "./index.scss"

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <td>S/N</td>
                <td>Date</td>
                <td>Loan Type</td>
                <td>Amount Taken</td>
            </tr>
        </thead>
    )
}
const TableBody = () =>{
    return(
        <tbody>
            <tr>
                <td>1</td>
                <td>2/12/2022</td>
                <td>Car Loan</td>
                <td>N100,000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2/12/2022</td>
                <td>Car Loan</td>
                <td>N200,000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>3/12/2022</td>
                <td>Car Loan</td>
                <td>N300,000</td>
            </tr>
        </tbody>
    )
}

const Tab = () => {
  return (
    <table>
        <TableHeader/>
        <TableBody/>
    </table>
   
  )
}

export default Tab