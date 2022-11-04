import Button from "components/shared/Button/Button";
// import "../account.scss"
import uploadIconImg from "assets/upload_icon.svg";

import "../pages/MyDetails/MyDetails.scss";

const Upload = ({ next, prev }: any) => {
  return (
    <>
      <div className="upload-emp form-card">
        <div className="upload-group">
          <label>Company ID</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Recent pay slip</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Employment/contact letter</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Goverment Issued ID</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Proof of address</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="account-buttons">
          <Button
            label="Previous"
            variant="secondary--outline"
            onClick={prev}
          />
          <Button label="Next" variant="primary" onClick={next} />
        </div>
      </div>
    </>
  );
};

export default Upload;
