
import { Button } from "components";
import { Progress } from "antd"
import "./table.css"

const Table = () => {
  return (
    <div >
      <table className="table">
        <tr>
          <th>S/N</th>
          <th>Date</th>
          <th>Loan type</th>
          <th>Amount Taken</th>
          <th>Repayment Status</th>
          <th>Tenor</th>
          <th>Action</th>
          <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>12/07/2022</td>
          <td>Payday loan</td>
          <td>N50,000</td>
          <td><Progress
          percent={58}
          strokeColor="#FF9800"
          trailColor="#cddff8"
          showInfo={false}
        />N20,000/N50,000</td>
          <td>1 Month</td>
          <td><Button
                
                label="Pay Back"
                variant="primary"
              /></td>
              <td>View Statement</td>
        </tr>
        <tr>
          <td>2</td>
          <td>22/04/2022</td>
          <td>Salary Advance</td>
          <td>N100,000</td>
          <td className="progress"><Progress
          percent={28}
          strokeColor="#FF505F"
          trailColor="#cddff8"
          showInfo={false}
        />N10,000/N100,000</td>
          <td>2 Months</td>
          <td><Button
                
                label="Pay Back"
                variant="primary"
              /></td>
              <td>View Statement</td>

        </tr>
        <tr>
          <td>3</td>
          <td>2/01/2022</td>
          <td>Device Finance</td>
          <td>N200,000</td>
          <td><Progress
          percent={88}
          strokeColor="#7BC67E"
          trailColor="#cddff8"
          showInfo={false}
        />N150,000/200,000</td>
          <td>3 Months</td>
          <td><Button
                
                label="Pay Back"
                variant="primary"
              /></td>
              <td>View Statement</td>
        </tr>
        
        
        
      </table>
    </div>
  )
}

export default Table