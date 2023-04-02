import SearchIcon from '@mui/icons-material/Search';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
const SearchBar = ({data}) => {
    const [FilteredData, SetFilteredData]=useState([]);
    const [wordEntered,setWordEntered]=useState("");
    const handleFilter=(event)=>{
        const searchWord=event.target.value;
        setWordEntered(searchWord);
        const newFilter=data.filter((value)=>{
            return value.Description.toLowerCase().includes(searchWord.toLowerCase())
        });
        if(searchWord===""){
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
        <div className="Search mt-[20px]">
            <div className="border-[grey] border-2 pr-4 rounded-[35px]">
                <input type="text" placeholder="Search" value={wordEntered} className="focus:outline-none h-[25px] w-[300px] pl-4 rounded-[35px]" onChange={handleFilter}/>
                {FilteredData.length===0?<SearchIcon/>:<><ClearIcon className='cursor-pointer' onClick={ClearInput}/> <SearchIcon/></>}
            </div>
            {FilteredData.length!=0 && (
            <div className="searchResult m-3 mt-1 w-[300px] h-[400px] overflow-y-auto bg-white p-2 leading-10">
            {FilteredData.slice(0,15).map((value,key)=>{
                return(
                <Link to="/" >
                    <p className='hover:bg-[grey]'>{value.Description}</p>
                </Link>
                )
            })}
            </div>
            )}
        </div>
     );
}
 
export default SearchBar;