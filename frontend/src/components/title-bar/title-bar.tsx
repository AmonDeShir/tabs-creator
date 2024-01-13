import { ParentProps } from "solid-js";
import styles from "./title-bar.module.css";


export const TitleBar = (props: ParentProps) => {

  return (
    <div role="heading" class={styles["title-bar"]}>
      {props.children}
    </div>
  );
};