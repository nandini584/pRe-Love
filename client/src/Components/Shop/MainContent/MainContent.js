// import { Tiles } from "../Tiles";
import itemdata from "../../Data/Items.json"


import SideBar from "../SideBar";
const MainContent = () => {
  return (
    <>
      <div id="page" className="flex">
        <SideBar />
        <div className="flex flex-wrap">
          {/* <Tiles></Tiles> */}
          {/* {itemdata.slice(0,5).map((value,key)=>{
            return(
              <Tiles Name={value.Name} Photo={value.url} Description={value.Description} Pricing={value.Price} Discount={value.Discount}/>
            )
          })
          } */}
        </div>
      </div>
    </>
  );
};
export default MainContent;
