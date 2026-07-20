export default function systemLayout({ children }) {
  return (
    <div className="layout-container">
      <h1></h1>
      <div className="main-content">
        <h2></h2>
        <main>{children}</main>
      </div>
    </div>
  );
}