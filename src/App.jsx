import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardCpomponet from "./components/CardComponent";
import { useState } from "react";

function App() {

const [projects, setProjects] = useState([]);
const [filter, setFilter] = useState([]);


const handleAddNewProject = (newProjects) => {
  setProjects( (prev) => { 
      const updateData = [...prev, newProjects];
      setFilter(updateData);
      return updateData
    }
    
) 
}
const handleSearch = (value) => {
  if(!value.trim()){
    setFilter(projects);
    return
  }
  console.log("value :",value)
  const filterData = projects.filter((project) => project.projectName.toLowerCase().includes(value.toLowerCase()));
  setFilter(filterData);
  console.log("filterData :",filterData)
}

  return (
    <div className="bg-light-gray">

      <section className="flex gap-10">
          <section className="w-[290px]">
          <SidebarComponent />
          </section>
          <section className="flex flex-col w-full gap-10 pt-5 ">
            <TopNavbarComponent
              handleSearch={handleSearch}
             />
            <section className="flex justify-between w-full">
              <section className="flex flex-col gap-10 p-5">
              <DashboardComponent />
              <div className="flex justify-between">
                <AssignmentsComponent />
                <AddNewProjectComponent 
                handleAddNewProject={handleAddNewProject}
                />
              </div>
              
              <section className="">
                <CardCpomponet 
                  projects={filter}
                />
              </section>
      
              </section>

              <section className="pr-5">
    
              <LearningMaterialsComponent />
              </section>
            </section>
          </section>
      </section>
    </div>
  );
}

export default App;
