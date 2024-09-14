import React from "react";
import Navbar from "../../components/admin-components/Navbar";
import All from "../../components/admin-components/All";
import Skills from "../../components/admin-components/Skills";
import Projects from "../../components/admin-components/Projects";
import { useTheme } from "../../context/Isdarkmode";


const Home = () => {
  const { theme } = useTheme();
  const [mode, setMode] = React.useState("all");

  const renderContent = () => {
    switch (mode) {
      case "all":
        return <All/>;
      case "skills":
        return <Skills/>;
      case "projects":
        return <Projects/>;
      default:
        return <All/>;
    }
  };

  return (
    <div className={`text-black min-h-screen flex flex-col ${theme==='dark' ? "bg-gray-900" : "bg-white"}`}>
      <Navbar mode={mode} setMode={setMode} />
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;