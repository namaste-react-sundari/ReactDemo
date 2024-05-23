import RestaurantCard from "./RestaurantCard"
// import resData1 from "../utils/mockData"
import Shimmer from "./Shimmer"
import {useState,useEffect} from "react";



const BodyComponent = ()=>{
    // Normal JS varaiable
// let resData = resData1;
console.log("Body Rendered.");

// state variable using useState 
let [resData, setResData] = useState([]);
let [filteredResData, setFilteredResData] = useState([]);
let [searchKey, setSearchKey] = useState("");

useEffect(()=>{
    fetchData();
    console.log("useEffect in body rendered.");
 },[]);
 
 const fetchData = async ()=>{
    const data = await fetch("https://corsproxy.io/?https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/live-sports-screenings&location=&isMobile=0");
    const json = await data.json();
    // console.log(json);
    // console.log(json?.page_data?.sections?.SECTION_ENTITIES_DATA);
    setResData(json?.page_data?.sections?.SECTION_ENTITIES_DATA);
    setFilteredResData(json?.page_data?.sections?.SECTION_ENTITIES_DATA);
};
    return resData.length === 0? <Shimmer/> :( 
        <div className="body-conatiner">
            <div className="search-conatiner">
                    <input type="text" className="search" value={searchKey} onChange={(e)=>{
                        setSearchKey(e.target.value);
                    }}></input>
                    <button className="search-button" onClick={()=>{ 
                        filteredResData = resData.filter(
                            (res)=>{ return res?.name.toLowerCase().includes(searchKey.toLowerCase())}
                        );
                        setFilteredResData(filteredResData);
                    }}>Search</button>
            </div>
            <div className="filter">                
                <button className="filter-button" 
                onClick={()=>{
                    const filteredData = resData.filter(
                        (res)=>{ return res?.rating?.aggregate_rating>=4.3;}
                    );
                    setResData(filteredData);
                }}>Top Rated Resturants</button>
            </div>
            <div className="restro-cards-container">
                    {               
                        filteredResData.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                        ))                         
                    }                   
            </div>
        </div>
    );
}



export default BodyComponent;