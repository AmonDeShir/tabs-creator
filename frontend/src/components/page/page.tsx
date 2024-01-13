import { ParentProps, createMemo, mergeProps } from "solid-js";
import styles from './page.module.css';
import { TitleBar } from "../title-bar/title-bar";

type Props = {
  title: string,
  width?: string,
  color?: "main" | "main-dark" | "second"
}

export const Page = (props: ParentProps<Props>) => {
  const merged = mergeProps({ color: 'second', width: "100%" }, props);
 
  const color = createMemo(() => {
    return " " + styles['page--' + merged.color];
  });

  const maxWidth = createMemo(() => {
    return ` max-width: ${merged.width};`;
  });


  return (
    <div class={styles.page + color()} style={maxWidth()}>
      <TitleBar>{props.title}</TitleBar>
      {props.children}
    </div>
  );
};