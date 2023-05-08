import { Add } from "@hitachivantara/uikit-react-icons";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import { IconButton } from "components/common";
import { PanelHeader } from "components/editor";
import useAppStore from "lib/store/useAppStore";
import useEditorStore from "lib/store/useEditorStore";
import { PageItem } from "./PageItem";

export const PanelPages = () => {
  const { pages, selectedPage, setPages, addPage, setSelectedPage } =
    useAppStore();
  const { leftPanel } = useEditorStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = pages.findIndex((item) => item.id === active.id);
      const newIndex = pages.findIndex((item) => item.id === over.id);

      setPages(arrayMove(pages, oldIndex, newIndex));
    }
  };

  const handleClick = (page: string) => {
    setSelectedPage(page);
  };

  const handleNewPage = () => {
    addPage({
      id: "new-page",
      label: "New page",
    });
  };

  return (
    <>
      <PanelHeader label={leftPanel.mode}>
        <IconButton title="Add page" onClick={handleNewPage}>
          <Add iconSize="XS" />
        </IconButton>
      </PanelHeader>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      >
        <SortableContext items={pages} strategy={verticalListSortingStrategy}>
          {pages.map((page) => (
            <PageItem
              key={page.id}
              id={page.id}
              label={page.label}
              onClick={() => handleClick(page.id)}
              selected={selectedPage === page.id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};
