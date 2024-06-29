import "./DropMessage.css";

export default function DropMessage({ children, open, closeDropMessage }) {
  return (
    <div className={open ? "drop-message open" : "drop-message"}>
      <button onClick={closeDropMessage} className="drop-message__close">
        <span></span>
        <span></span>
      </button>
      {children}
    </div>
  );
}
