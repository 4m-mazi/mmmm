interface Props {
  navigation: {
    title: string;
    url: string;
  }[];
}

export default (props: Props) => {
  return (
    <nav>
      <ul>
        {/* {props.props.navigation[0].title} */}
        {props.navigation.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
