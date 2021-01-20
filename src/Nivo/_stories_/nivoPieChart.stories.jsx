import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Pie, ResponsivePie } from "@nivo/pie";
import { stageData } from "../data";
import {
  BLUE,
  YELLOW,
  GREEN,
  TURQUOISE,
  GRASS_GREEN,
  GREY_1,
} from "govuk-colours";

const govColours = [BLUE, TURQUOISE, GREEN, YELLOW, GRASS_GREEN];

const commonProperties = {
  width: 900,
  height: 500,
  margin: { top: 80, right: 120, bottom: 80, left: 120 },
  data: stageData,
  colors: govColours,
  animate: true,
};

const legends = [
  {
    anchor: "bottom",
    direction: "row",
    translateY: 56,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: "#999",
    symbolSize: 18,
    symbolShape: "circle",
    effects: [
      {
        on: "hover",
        style: {
          itemTextColor: "#000",
        },
      },
    ],
  },
];

const stories = storiesOf("Nivo", module);

stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Pie
    {...commonProperties}
    legends={boolean("legends", false) ? legends : []}
  />
));

stories.add("donut", () => <Pie {...commonProperties} innerRadius={0.6} />);

stories.add("fancy slices", () => (
  <Pie
    {...commonProperties}
    innerRadius={0.6}
    padAngle={0.5}
    cornerRadius={5}
    radialLabelsLinkColor={{
      from: "color",
    }}
    radialLabelsLinkStrokeWidth={3}
    radialLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.2]],
    }}
  />
));

stories.add("custom radial label", () => (
  <Pie
    {...commonProperties}
    innerRadius={0.6}
    padAngle={0.5}
    cornerRadius={5}
    radialLabel={(d) => `${d.id}: ${d.value}`}
    radialLabelsLinkColor={{
      from: "color",
    }}
    radialLabelsLinkStrokeWidth={3}
    radialLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.2]],
    }}
    enableSliceLabels={false}
  />
));

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });
  const customY1 = centerY - 20;
  const customY2 = centerY + 20;
  return (
    <>
      <text
        x={centerX}
        y={customY1}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "60px",
          fontWeight: "600",
        }}
      >
        {total}
      </text>
      <text
        x={centerX}
        y={customY2}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {"Projects"}
      </text>
    </>
  );
};

stories.add("adding a metric in the center using a custom layer", () => (
  <Pie
    {...commonProperties}
    innerRadius={0.8}
    enableSliceLabels={false}
    radialLabel={(d) => `${d.id} (${d.formattedValue})`}
    layers={[
      "slices",
      "sliceLabels",
      "radialLabels",
      "legends",
      CenteredMetric,
    ]}
  />
));

stories.add("Responsive chart", () => (
  <div style={{ height: 500 }}>
    <ResponsivePie
      data={stageData}
      margin={{ top: 80, right: 120, bottom: 80, left: 120 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={govColours}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      layers={[
        "slices",
        "sliceLabels",
        "radialLabels",
        "legends",
        CenteredMetric,
      ]}
    />
  </div>
));

stories.add("Responsive chart that matches designs", () => (
  <div style={{ height: 500 }}>
    <ResponsivePie
      data={stageData}
      colors={govColours}
      margin={{ top: 80, right: 120, bottom: 80, left: 120 }}
      startAngle={-90}
      innerRadius={0.8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabel={(d) => `${d.id}: ${d.value}`}
      radialLabelsLinkStrokeWidth={3}
      enableSliceLabels={false}
      layers={["slices", "radialLabels", "legends", CenteredMetric]}
    />
  </div>
));
