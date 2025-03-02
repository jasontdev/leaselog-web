import "./Button.css";

type ButtonProps = {
  onClick?: () => void;
  center?: boolean;
  text: string;
}

export default function Button(props: ButtonProps) {
  const {onClick, center, text} = props;

  let className = "btn";
  if (center) {
    className += " btn-center";
  }

  function handleClick() {
    if(onClick) {
      onClick();
    }
  }

  return (<button className={className} onClick={() => handleClick()}>{text}</button>);
}