import styles from "./page.module.css";
import { EditorCore } from "@repo/ui/editor";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.editContent}>
        <EditorCore />
      </div>
    </main>
  );
}
