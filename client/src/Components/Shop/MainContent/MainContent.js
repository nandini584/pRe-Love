import { Tiles } from "../../Tiles";
import itemdata from "../../Data/Items.json"


import SideBar from "../SideBar";
const MainContent = () => {
  return (
    <>
      <div id="page" className="flex">
        <SideBar />
        <div className="grid" style={{
          gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr "
        }}>
          {itemdata.map((value,key)=>{
            return(
              <Tiles Name={value.Name} Photo={value.url} Description={value.Description} Pricing={value.Price} Discount={value.Discount}/>
            )
          })
          }
        </div>
      </div>
    </>
  );
};
export default MainContent;
