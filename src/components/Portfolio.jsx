import "./Portfolio.scss";
import { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";
import {
  projects,
  frontendChallenges,
  backendChallenges,
  performanceChallenges,
} from "../Portfolio";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "frontendChallenges",
      title: "Frontend Challenges",
    },
    {
      id: "backendChallenges",
      title: "Backend Challenges",
    },
    {
      id: "performanceChallenges",
      title: "Performance Challenges"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projects);
        break;
      case "frontendChallenges":
        setData(frontendChallenges);
        break;
      case "backendChallenges":
        setData(backendChallenges);
        break;
      case "performanceChallenges":
        setData(performanceChallenges);
        break;
      default:
        setData(projects);
    }
  }, [selected]);

  return (
    <div class="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div class="Container">
        {data.map((data) => (
          <div class="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
