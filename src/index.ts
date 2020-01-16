import { Button } from "./types";
import { parse } from "./parser";
import { log } from "./logger";

// defining the buttons
const buttons: Button = [
  "positive",
  { type: "negative" },
  {
    type: "neutral",
    title: "I won't do anything!",
    action: () => log("neutral hit")
  },
  {
    type: "custom",
    title: "Hit me!",
    style: "custom",
    action: () => log("custom hit")
  }
];

// parsing the buttons
const layout = parse(buttons);

// getting the app container
const app = document.getElementById("app");

// drawing the buttons
if (app && layout instanceof Array && layout.length) {
  layout.forEach(element => app.appendChild(element));
}
