import { navigation } from "../../_data/navigation.ts";
export default () => {
  return (
    <nav>
      <ul>
        {navigation.map((item) => (
          <li key={item.title}>
            <a href={item.url}>
              <span className="icon">#</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
