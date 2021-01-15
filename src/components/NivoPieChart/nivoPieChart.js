import React from "react"
import { render } from "react-dom"
import { ResponsivePie } from "@nivo/pie"
import { data } from "../data"

const margin = { top: 30, right: 200, bottom: 30, left: 30 }

const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 600,
    height: 600
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 96,
    color: "#FFFFFF",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 24
  }
}

const theme = {
  background: "#222222",
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const legends = [
  {
    anchor: "right",
    direction: "column",
    justify: false,
    translateX: 140,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#ffffff",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

const App = () => (
  <div style={styles.root}>
    <ResponsivePie
      margin={margin}
      data={data}
      innerRadius={0.8}
      enableRadialLabels={false}
      enableSlicesLabels={false}
      theme={theme}
      legends={legends}
    />
    <div style={styles.overlay}>
      <span>5</span>
      <span style={styles.totalLabel}>total components</span>
    </div>
  </div>
)

render(<App />, document.getElementById("root"))
