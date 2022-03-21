export default function Header(props) {
  return (
  <div className="p-2">
    <header className="border border-secondary rounded">
    <h1 className="text-center text-primary">{props.title}</h1>
    <p className="text-center text-muted">
      <em>React concept demos in one place...</em>
    </p>
    </header>
  </div>
  );
}

