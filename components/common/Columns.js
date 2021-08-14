export default function Columns({
  multiline = false,
  hcenter = false,
  vcenter = false,
  mobile = false,
  children
}) {
  const classes = ["columns"]

  if (multiline) classes.push("is-multiline");
  if (hcenter) classes.push("is-centered");
  if (vcenter) classes.push("is-vcentered");
  if (mobile) classes.push("is-mobile");

  return <div className={classes.join(" ")}>{children}</div>;
}

Columns.Column = ({size, offset, narrow = false, children}) => {
  const classes = ["column"]

  if (size) classes.push(`is-${size}`);
  if (offset) classes.push(`is-offset-${offset}`);
  if (narrow) classes.push("is-narrow");

  return <div className={classes.join(" ")}>{children}</div>;
}