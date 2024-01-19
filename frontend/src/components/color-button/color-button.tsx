import { mergeProps } from "solid-js";
import styles from "./color-button.module.css";

type Props = {
  text?: string;
  plus?: boolean;
  color?: "main" | "second";
  onClick?: (text: String) => void; 
}

export const ColorButton = (props: Props) => {
  const merged = mergeProps({ color: "second" }, props);  

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.text ?? "");
    }
  }
  
  return (
    <div class={styles['color-button'] + " " + styles["color-button--" + merged.color] + " " + (props.plus ? styles['color-button--add'] : "")} onclick={handleClick}>
      {props.text}
    </div>
  );
}