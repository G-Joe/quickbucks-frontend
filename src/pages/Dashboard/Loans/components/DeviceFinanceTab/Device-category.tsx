import "../Device/Device.scss";

const Category = ({img, name, onClick}: any) =>{
    return (
        <div className="device-category" onClick={onClick}>
            <img src={img} alt=""/>
        </div>
    );
};

export default Category;