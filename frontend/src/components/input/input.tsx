import { mergeProps } from "solid-js";
import styles from "./input.module.css"

type Props = {
  type?: "text",
  placeholder?: string; 
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: Props) => {
  const merged = mergeProps({ type: "text", placeholder: "", value: "" }, props); 
  
  const handleInput = (e: InputEvent & { target: HTMLInputElement }) => {
    if (merged.onChange) {
      console.log("e: ", e, e.target);
      merged.onChange(e.target.value)
    }
  }

  return (
    <label class={styles.label}>
      <input class={styles.input} type={merged.type} placeholder={merged.placeholder} value={merged.value} oninput={handleInput} />
    </label>
  );
}