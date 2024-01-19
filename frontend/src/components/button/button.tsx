import { mergeProps } from "solid-js";
import styles from "./button.module.css"

type Props = {
  text?: string;
  onClick?: () => void;
}

export const Button = (props: Props) => {
  const merged = mergeProps({ text: "" }, props); 
  
  const handleClick = () => {
    if (merged.onClick) {
      merged.onClick()
    }
  }

  return (
    <label class={styles.label}>
      <input class={styles.input} type="button" value={merged.text} onclick={handleClick} />
    </label>
  );
}