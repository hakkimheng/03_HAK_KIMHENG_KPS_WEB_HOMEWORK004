import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import FilterComponent from "./components/FilterComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";

function App() {
  return (
    <>
      <section className="flex gap-10">
      <section className="w-[290px]">
      <SidebarComponent />
      </section>
      <section className="flex flex-col w-full gap-10 pt-5">
        <TopNavbarComponent />

        <section className="flex justify-between w-fulls">
          <section className="flex flex-col gap-10">
          <DashboardComponent />
          <AssignmentsComponent />
          </section>
          <section>
          <LearningMaterialsComponent />
          </section>
        </section>
      </section>
      <FilterComponent />
      </section>
    </>
  );
}

export default App;
