import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>
        <Link to="/">토익 영단어(고급)</Link>
      </h1>
      <div>
        <a href="#x">
          단어추가
        </a>
        <a href="#x">
          Day추가
        </a>
      </div>
    </div>
  );
}