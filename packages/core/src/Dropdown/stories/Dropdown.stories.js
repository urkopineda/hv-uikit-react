import React from "react";
import { HvDropdown } from "../..";

export default {
  title: "Components/Dropdown",
  parameters: {
    componentSubtitle: null,
    usage: "import { HvDropdown } from '@hv/uikit-react-core/dist'"
  },
  component: HvDropdown
};

export const Main = () => (
  <HvDropdown
    multiSelect
    showSearch
    values={[
      { label: "value 1" },
      { label: "value 2", selected: true },
      { label: "value 3" },
      { label: "value 4" }
    ]}
  />
);

export const Empty = () => <HvDropdown id="dropdown1" />;

Empty.story = {
  parameters: {
    docs: {
      storyDescription: "Dropdown with no values"
    }
  }
};

export const SingleSelection = () => (
  <HvDropdown
    id="dropdown7"
    onChange={item => console.log(item)}
    values={[
      { id: "id-1", label: "value 1" },
      { id: "id-2", label: "value 2" },
      { id: "id-3", label: "value 3" },
      { id: "id-4", label: "value 4" }
    ]}
  />
);

SingleSelection.story = {
  parameters: {
    docs: {
      storyDescription: "Support ids to manage selection"
    }
  }
};

export const MultiSelection = () => (
  <HvDropdown
    id="dropdown2"
    multiSelect
    showSearch
    labels={{ title: "Dropdown Title" }}
    values={[
      { label: "value 1" },
      { label: "value 2", selected: true },
      { label: "value 3" },
      { label: "value 4" }
    ]}
  />
);

export const MultiSelectionNoSearch = () => (
  <HvDropdown
    id="dropdown5"
    onChange={item => console.log(item)}
    multiSelect
    values={[
      { id: "id-1", label: "value 1" },
      { id: "id-2", label: "value 1", selected: true },
      { id: "id-3", label: "value 3" },
      { id: "id-4", label: "value 4" }
    ]}
  />
);

export const SingleSelectionWithSearch = () => (
  <HvDropdown
    id="dropdown6"
    showSearch
    values={[
      { label: "value 1" },
      { label: "value 2", selected: true },
      { label: "value 3" },
      { label: "value 4" }
    ]}
  />
);

SingleSelectionWithSearch.story = {
  parameters: {
    docs: {
      storyDescription: "Single selection Dropdown with search and less than 10 elements"
    }
  }
};

export const SingleSelectionNoDefault = () => (
  <HvDropdown
    id="dropdown8"
    selectDefault={false}
    hasTooltips
    values={[
      { label: "value 1" },
      { label: "value 2" },
      { label: "value 3" },
      { label: "value 4" },
      { label: "value 5 value 5 value 5 value 5 value 5 value 5 value 5 value 5 value 5" }
    ]}
  />
);

export const Disabled = () => (
  <HvDropdown
    id="dropdown9"
    disabled
    multiSelect
    aria-label="text"
    values={[
      { label: "value 1", selected: false },
      { label: "value 2", selected: false },
      { label: "value 3", selected: true },
      { label: "value 4", selected: false },
      { label: "value 5 value 5 value 5 555555555555 value value 5", selected: false },
      { label: "value 6" },
      { label: "value 7" },
      { label: "value 8", selected: true },
      { label: "value 9", selected: true },
      { label: "value 10" },
      { label: "value 11" },
      { label: "value 12" }
    ]}
  />
);

export const Expanded = () => (
  <HvDropdown
    id="dropdown12"
    expanded
    multiSelect
    showSearch
    values={[
      { label: "value 1" },
      { label: "value 2" },
      { label: "value 3", selected: true },
      { label: "value 4" },
      { label: "value 5 value 5 value 5 555555555555 value value 5" },
      { label: "value 6" },
      { label: "value 7" },
      { label: "value 8", selected: true },
      { label: "value 9", selected: true },
      { label: "value 10" },
      { label: "value 11" },
      { label: "value 12" }
    ]}
  />
);

Expanded.story = {
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};
