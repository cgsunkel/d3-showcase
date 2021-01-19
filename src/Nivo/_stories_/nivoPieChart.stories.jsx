import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Pie } from "@nivo/pie";
import { stageData } from "../data";
import { BLUE, YELLOW, GREEN, TURQUOISE, GRASS_GREEN } from "govuk-colours";

const govColours = [BLUE, YELLOW, GREEN, TURQUOISE, GRASS_GREEN];

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

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "52px",
        fontWeight: "600",
      }}
    >
      {total}
    </text>
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

stories.add("formatted tooltip values", () => (
  <Pie
    {...commonProperties}
    tooltipFormat={(value) =>
      `${Number(value).toLocaleString("ru-RU", {
        minimumFractionDigits: 2,
      })} ₽`
    }
  />
));

stories.add("custom tooltip", () => (
  <Pie
    {...commonProperties}
    tooltip={({ id, value, color }) => (
      <strong style={{ color }}>
        {id}: {value}
      </strong>
    )}
    theme={{
      tooltip: {
        container: {
          background: "#333",
        },
      },
    }}
  />
));

stories.add("enter/leave (check console)", () => (
  <Pie
    {...commonProperties}
    onMouseEnter={(data, e) => {
      console.log({ is: "mouseenter", data, event: e });
    }}
    onMouseLeave={(data, e) => {
      console.log({ is: "mouseleave", data, event: e });
    }}
  />
));
