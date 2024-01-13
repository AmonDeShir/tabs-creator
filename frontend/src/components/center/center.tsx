import { ParentProps, mergeProps } from "solid-js";
import styles from "./center.module.css";

type Props = {
  justifyContent?: "center" | "start" | "end" | "flex-end" | "flex-start" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch";
}

export const Center = (props: ParentProps<Props>) => {
  const merged = mergeProps({ justifyContent: 'center' }, props);

  return (
    <div class={styles.center} style={'justify-content: ' + merged.justifyContent}>
      {merged.children}
    </div>
  );
};