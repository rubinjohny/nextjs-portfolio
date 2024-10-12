import { Sheet } from "react-modal-sheet";
import { Project } from "@/app/utils/data/projects";
import { SheetContent } from "./SheetContent";
import styles from "./styles.module.css";

export const ProjectSheet = ({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: Project | undefined;
}) => {
  return (
    <Sheet
      isOpen={open}
      onClose={() => onClose()}
      rootId="root"
      // detent="content-height"
    >
      <Sheet.Container className={styles["sheet-container"]}>
        <Sheet.Header />
        <Sheet.Content>{data && <SheetContent data={data} />}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
