import { HvFile, HvFileData, HvFileRemovedEvent } from "../File";
import fileListClasses, { HvFileListClasses } from "./fileListClasses";
import { useId } from "hooks";
import { StyledList } from "./FileList.styles";
import clsx from "clsx";

export type HvFileListProps = {
  /**
   * Id to be applied to the root node.
   */
  id?: string;
  /**
   * The files to upload.
   */
  list?: HvFileData[];
  /**
   * Callback fired when file is removed from list.
   */
  onFileRemoved?: HvFileRemovedEvent;
  /**
   * Value of aria-label to apply to remove file button in FileList
   * */
  removeFileButtonLabel?: string;
  /**
   * A Jss Object used to override or extend the styles applied to the component.
   */
  classes?: HvFileListClasses;
};

export const HvFileList = ({
  id,
  classes,
  list = [],
  removeFileButtonLabel,
  onFileRemoved,
}: HvFileListProps) => {
  const hasFiles = list.length > 0;
  if (!hasFiles) return null;

  const fileListId = useId(id, "file-list");
  return (
    <StyledList
      id={fileListId}
      className={clsx(classes?.list, fileListClasses.list)}
    >
      {list.map((data) => (
        <HvFile
          key={data.id}
          classes={{ root: clsx(classes?.listItem, fileListClasses.listItem) }}
          id={useId(fileListId, "file-list-item")}
          data={data}
          onFileRemoved={onFileRemoved}
          removeFileButtonLabel={removeFileButtonLabel}
        />
      ))}
    </StyledList>
  );
};
