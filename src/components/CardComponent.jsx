import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({projects}) {

  const processStatus = (status) => {
    switch (status) {
      case "25":
        return "bg-custom-pink w-1/4"
      case "50":
        return "bg-custom-carrot  w-1/2";
      case "75":
        return "bg-custom-yellow-500 w-3/4";
      case "100":
        return "bg-custom-sky-blue  w-full";
    }
  }

  const dayStyle = (status) => {
    switch (status) {
      case "25":
        return "text-custom-pink"
      case "50":
        return "text-custom-carrot";
      case "75":
        return "text-custom-yellow-500";
      case "100":
        return "text-custom-sky-blue";
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-3">
     {projects.map(({id, projectName, dueDate,progress, description})=> {
      let dateline;
      const date = new Date(dueDate);
      const currentDate = new Date();
      const timeDiff = date - currentDate;
      let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      if(daysDiff >= 7){
        dateline = Math.floor(daysDiff/7) + " weeks " + Math.ceil(daysDiff%7) + " days left";
      }
      else if(daysDiff === 0){
        dateline = "Dateline Today";
      }else if(daysDiff === 1){
        dateline = "1 day left";
      }
      else{
        dateline = daysDiff + " days left";
      }

      return(
        <div key={id} className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`${dayStyle(progress)} font-medium`}>{dueDate}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description === "" || description == undefined? "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum.loremdfgfgfdsdf": description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{progress} %</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={`${processStatus(progress)} h-2.5 rounded-full`}></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-full text-center">
            {dateline}
          </p>
        </div>
      </div>
      )
     })}
          
        
    </div>
  );
}
