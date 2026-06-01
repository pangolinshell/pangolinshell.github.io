import "./Button.scss";

type BrutalistButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

function BrutalistButton({
  children,
  onClick,
  type = "button",
}: BrutalistButtonProps) {
  return (
    <button className="brutalist-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default BrutalistButton;