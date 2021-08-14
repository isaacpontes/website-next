export default function Section({ id, color, gradient = false, children }) {
  const classes = ["section"]

  if (color) classes.push(`has-background-${color}`);
  if (gradient) classes.push("is-multiline");

  return <div id={id} className={classes.join(" ")}>{children}</div>;
}