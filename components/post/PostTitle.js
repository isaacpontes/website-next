export default function PostTitle({ children }) {
  return (
    <h1 className="title is-size-2-tablet is-size-1-desktop has-text-weight-bold">
      {children}
    </h1>
  );
}