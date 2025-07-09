//.Create a functional component named Button that accepts props for text and color.
//Style the button using inline styles or CSS classes based on the color prop.
//Import and render the Button component in the App component with different text and color props.

export default function Button(props) {
  let text = props.text;
  let color = props.color;
  const styling = {
    //color: "white",
    fontSize: "16px",
    backgroundColor: color,
  };

  return <button style={styling}>{text}</button>;
}
