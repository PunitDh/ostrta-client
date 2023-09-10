import {
  CalendarMonth,
  NumbersOutlined,
  Percent,
  TextFields,
  TextFormat,
} from "@mui/icons-material";
import { IconClock, IconCurrencyDollar } from "@tabler/icons";

export const fontSizes = Object.freeze([
  "8px",
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
]);

export const Border = Object.freeze({
  BORDER_TOP: "borderTop",
  BORDER_RIGHT: "borderRight",
  BORDER_BOTTOM: "borderBottom",
  BORDER_LEFT: "borderLeft",
  NO_BORDER: "NO_BORDER",
  ALL_BORDERS: "ALL_BORDERS",
  OUTSIDE_BORDERS: "OUTSIDE_BORDERS",
  THICK_OUTSIDE_BORDERS: "THICK_OUTSIDE_BORDERS",
});

export const outsideBorders = Object.freeze([
  Border.OUTSIDE_BORDERS,
  Border.THICK_OUTSIDE_BORDERS,
]);

export const borderStyles = Object.freeze([
  {
    id: Border.BORDER_BOTTOM,
    props: { borderBottom: "1px solid black" },
    value: "Border Bottom",
  },
  {
    id: Border.BORDER_TOP,
    props: { borderTop: "1px solid black" },
    value: "Border Top",
  },
  {
    id: Border.BORDER_LEFT,
    props: { borderLeft: "1px solid black" },
    value: "Border Left",
  },
  {
    id: Border.BORDER_RIGHT,
    props: { borderRight: "1px solid black" },
    value: "Border Right",
  },
  {
    id: Border.NO_BORDER,
    props: undefined,
    value: "No Border",
  },
  {
    id: Border.ALL_BORDERS,
    props: {
      borderRight: "unset",
      borderLeft: "1px solid black",
      borderTop: "1px solid black",
      borderBottom: "unset",
      cellBorders: {
        borderRight: "1px solid black",
        borderLeft: "unset",
        borderTop: "unset",
        borderBottom: "1px solid black",
      },
    },
    value: "All Borders",
  },
  {
    id: Border.OUTSIDE_BORDERS,
    props: {
      borderRight: "1px solid black",
      borderLeft: "1px solid black",
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
    },
    value: "Outside Borders",
  },
  {
    id: Border.THICK_OUTSIDE_BORDERS,
    props: {
      borderRight: "2px solid black",
      borderLeft: "2px solid black",
      borderTop: "2px solid black",
      borderBottom: "2px solid black",
    },
    value: "Thick Outside Borders",
  },
]);

export const NumberFormat = Object.freeze({
  GENERAL: "General",
  NUMBER: "Number",
  CURRENCY: "Currency",
  SHORT_DATE: "Short Date",
  LONG_DATE: "Long Date",
  TIME: "Time",
  PERCENTAGE: "Percentage",
  TEXT: "Text",
});

export const numberFormats = Object.freeze([
  { id: NumberFormat.GENERAL, function: String, Icon: TextFormat },
  { id: NumberFormat.NUMBER, function: Number, Icon: NumbersOutlined },
  { id: NumberFormat.CURRENCY, Icon: IconCurrencyDollar },
  { id: NumberFormat.SHORT_DATE, Icon: CalendarMonth },
  { id: NumberFormat.LONG_DATE, Icon: CalendarMonth },
  { id: NumberFormat.TIME, Icon: IconClock },
  { id: NumberFormat.PERCENTAGE, Icon: Percent },
  { id: NumberFormat.TEXT, Icon: TextFields },
]);
