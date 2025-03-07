import React, { useEffect } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { useState } from "react";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [learningMaterialsData, setLearningMaterialsData] = useState(learningMaterials)
  const [filter , setFilter] = useState([]);
  useEffect(() => {
    setFilter(learningMaterials);
  }, []);
  
  // favorite button
const isFav = (id) =>{
  learningMaterialsData.map((item) => {
    if(item.id ===id){
      item.isFavorite = !item.isFavorite;
      setLearningMaterialsData([...learningMaterialsData]);
    }
}) 
};
const filterFunction = (value) => {
  const filterData = [...filter].sort((a, b) => 
    value === "A-Z" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );
  setFilter(filterData);
};

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent 

        filterFunction={filterFunction}
        
      />   

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {filter?.map(({id , image , title, postedAt , isFavorite}) => {
          return ( 
            <div key={id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
                <img
                  src={image}
                  alt={title}
                  width={50}
                  height={50}
                  className="rounded-xl"
                />

                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="text-base font-medium">{title}</p>
                    <Star size={20} fill={isFavorite? "#eece26" :"none"} stroke = {isFavorite? "none" : "black"}
                    onClick={()=> isFav(id)}/>
                  </div>
                  <p className="text-gray-400 text-sm">Posted at: {postedAt}</p>
                </div>
          </div>
          )
        } )
        }
      </div>
    </div>
  );
}
