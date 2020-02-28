/* eslint-env jest */

import React from "react";
import { mount } from "enzyme";
import { withStyles } from "@material-ui/core";

import Tooltip from "..";
import HvProvider from "../../Provider";
import HvTypography from "../../Typography";
import styles from "../styles";

const createTooltipData = data => {
  // eslint-disable-next-line react/prop-types
  const TooltipContent = ({ classes }) => (
    <div>
      <div className={classes.title}>
        <HvTypography variant="labelText">{data.title || ""}</HvTypography>
      </div>
      <div className={classes.valueWrapper}>
        {data.elements.map(element => (
          <div key={element.name} className={classes.values}>
            <HvTypography variant="labelText">{element.name}</HvTypography>
            <div className={classes.separator} />
            <HvTypography variant="sText">{element.value}</HvTypography>
          </div>
        ))}
      </div>
    </div>
  );

  return withStyles(styles)(TooltipContent);
};

const Anchor = (
  <button id="testChild" type="submit">
    Hello World
  </button>
);

describe("Single Line Tooltip", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(
      <HvProvider>
        <Tooltip
          tooltipData={
            <HvTypography variant="labelText">Grid View</HvTypography>
          }
          tooltipAnchor={Anchor}
        />
      </HvProvider>
    );
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render single line tooltip correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the single line Tooltip", () => {
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip.length).toBe(1);
  });
});

describe("Multi Line Tooltip - No Header", () => {
  let wrapper;

  const data = {
    elements: [
      { name: "Status", value: "Open" },
      { name: "Date", value: "12/08/2018" },
      { name: "Assignee", value: "Management" },
      { name: "Approval", value: "Not yet requested" }
    ]
  };

  const TooltipData = createTooltipData(data);

  beforeEach(async () => {
    wrapper = mount(
      <HvProvider>
        <Tooltip
          tooltipData={<TooltipData />}
          tooltipAnchor={Anchor}
          useSingle={false}
        />
      </HvProvider>
    );
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render mmultiple line tooltip correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the multiple line Tooltip", () => {
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip.length).toBe(1);
  });
});

describe("Multi Line Tooltip - With Header", () => {
  let wrapper;

  const data = {
    title: "January",
    elements: [
      { name: "Sales", value: "52,000 units" },
      { name: "Profit", value: "50%" }
    ]
  };

  const TooltipData = createTooltipData(data);

  beforeEach(async () => {
    wrapper = mount(
      <HvProvider>
        <Tooltip
          tooltipData={<TooltipData />}
          tooltipAnchor={Anchor}
          useSingle={false}
        />
      </HvProvider>
    );
  });

  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render multiple line tooltip with header correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the multiple line Tooltip with header", () => {
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip.length).toBe(1);
  });
});
