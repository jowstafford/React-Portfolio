import "./PortfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      class={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
