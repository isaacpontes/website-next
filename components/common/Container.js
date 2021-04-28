export default function Container({ extraClasses, children }) {
  return (
    <div className={`container ${extraClasses}`}>
      {children}
    </div>
  );
}