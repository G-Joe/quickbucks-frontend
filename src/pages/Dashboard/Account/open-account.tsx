import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";
import Personal from "./Open-account-components/personal-details";
import EditDetails from "./Open-account-components/edit-details";
import EditDetailsB from "./Open-account-components/edit-details-B";
import Upload from "./Open-account-components/upload-documents";
import Otp from "./Open-account-components/otp";
import { Steps} from "antd";
import React, { useState } from 'react';



const{Step} = Steps;

const OpenAccount = () => {

  const [current, setCurrent] = useState(0);

    const next = () =>{
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    const steps = [
      {
        title: 'confirm personal details',
        content: <Personal next={next}/>,
      },
      {
        title: 'edit details',
        content: <EditDetails next={next} prev={prev}/>,
      },
      {
        title: 'edit details form B',
        content: <EditDetailsB next={next} prev={prev}/>,  
      },
      {
        title: 'upload documents',
        content: <Upload next={next} prev={prev}/>,
      },
      {
        title:'enter OTP',
        content: <Otp prev={prev}/>,
      }
     
    ];

  return (
    <>
      <div className="main-fit">
        <Header img={accountLogo} title="Accounts" />
        <div className="steps">
        <Steps current={current} labelPlacement="horizontal" size="small">
          {steps.map(item =>  (
            <Step key={item.title} title={item.title}/>
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

        {/* <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Process Complete!')}>
                Done
              </Button>
          )}
          {current > 0 && (
            <Button style={{margin: '0 8px'}} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div> */}

      </div>
      </div>
      
      
    </>
  );
};



export default OpenAccount;
