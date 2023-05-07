import SearchIcon from '@mui/icons-material/Search';
import React,{ useState } from 'react';
// import { Link } from 'react-router-dom';
// import ClearIcon from '@mui/icons-material/Clear';
const SearchBar = ({data}) => {
    const [FilteredData, SetFilteredData]=useState([]);
    const [wordEntered,setWordEntered]=useState("");
    const handleFilter=(event)=>{
        const searchWord=event.target.value;
        setWordEntered(searchWord);
        const newFilter=data.filter((value)=>{
            return value.Description.toLowerCase().includes(searchWord.toLowerCase())
        });
        if(searchWord ===""){
            SetFilteredData([]);
        }
        else
        SetFilteredData(newFilter);
    }
    const ClearInput=()=>{
        SetFilteredData([]);
        setWordEntered("");
    }
    return ( 
        <>
            <div className="rounded-[10px] h-[6vh] w-[40vw] bg-[#E0E2E1] flex items-center gap-[10px] pl-[6px] max-w-[700px]">
                <SearchIcon/> 
                <input type="text" placeholder="Search" value={wordEntered} className="focus:outline-none mr-[2px] rounded-[10px] text-[2rem] font-[400] text-[#666666] bg-[#E0E2E1] w-[30vw]" onChange={handleFilter}/>
            </div>
            {/* {FilteredData.length!==0 && (
            <div className="searchResult m-3 mt-1 w-[300px] h-[400px] overflow-y-auto p-2 leading-10">
            {FilteredData.slice(0,15).map((value,key)=>{
                return(
                <Link to="/" >
                    <p className='hover:bg-[grey]'>{value.Description}</p>
                </Link>
                )
            })}
            </div>
            )} */}
        </>
     );
}
 
export default SearchBar;