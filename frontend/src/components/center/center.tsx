import { ParentProps, mergeProps } from "solid-js";
import styles from "./center.module.css";

type Props = {
  justifyContent?: "center" | "start" | "end" | "flex-end" | "flex-start" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch";
  tableOnMobile?: boolean;
}

export const Center = (props: ParentProps<Props>) => {
  const merged = mergeProps({ justifyContent: 'center' }, props);
  const mobile = merged.tableOnMobile ? " " + styles["center--table-on-mobile"] : "";

  return (
    <div class={styles.center + mobile} style={'justify-content: ' + merged.justifyContent}>
      {merged.children}
    </div>
  );
};