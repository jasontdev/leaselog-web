import {ReactNode} from "react";
import "./Container.css";

type ContainerProps = {
  children: ReactNode;
  column?: boolean;
  center?: boolean;
}

export default function Container(props: ContainerProps) {
  const { children, column, center } = props;
  let className = "container";

  if(column) {
    className += " container-column";
  }

  if(center) {
    if(column) {
      className += " container-column";
    } else {
      className += " container-justify-center";
    }
  }

  return (
    <div className={className}>{children}</div>
  )
}