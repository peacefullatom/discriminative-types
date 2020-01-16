import {
  Button,
  buttonTypePositive,
  buttonTypeNegative,
  ButtonAction,
  buttonTypeNeutral,
  buttonTypeCustom
} from "./types";
import { log } from "./logger";

/**
 * extract button title
 * @param type button type
 * @param title button title
 */
function title(type: string, title?: string): string {
  if (typeof title === "string" && title) {
    return title;
  }
  if (type === buttonTypePositive) {
    return "OK";
  }
  if (type === buttonTypeNegative) {
    return "Cancel";
  }
  return "button";
}

/**
 * extract button action
 * @param type button type
 * @param action button action
 */
function click(type: string, action?: ButtonAction): ButtonAction {
  if (typeof action !== "function") {
    if (type === buttonTypePositive) {
      return () => log("positive hit");
    }
    if (type === buttonTypeNegative) {
      return () => log("negative hit");
    }
    if (type === buttonTypeNeutral) {
      return () => log("no function for neutral button");
    }
    if (type === buttonTypeCustom) {
      return () => log("no function for neutral button");
    }
  }
  return action;
}

/**
 * extract button style
 * @param type button type
 * @param style button style
 */
function style(type: string, style?: string): string {
  if (typeof style === "string" && style) {
    return style;
  }
  if (type === buttonTypePositive) {
    return "primary";
  }
  if (type === buttonTypeNegative) {
    return "danger";
  }
  if (type === buttonTypeNeutral) {
    return "secondary";
  }
  return "custom";
}

/**
 * create the button
 * @param type button type
 * @param className button style
 * @param caption button title
 * @param action button action
 */
function create(
  type: string,
  className?: string,
  caption?: string,
  action?: ButtonAction
): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = style(type, className);
  button.innerText = title(type, caption);
  button.onclick = click(type, action);
  return button;
}

/**
 * parse buttons list and create elements
 * @param buttons buttons list
 */
export function parse(buttons: Button): HTMLButtonElement[] {
  const result: HTMLButtonElement[] = [];
  if (typeof buttons === "string") {
    result.push(create(buttons));
  } else if (buttons instanceof Array) {
    buttons.forEach(button => {
      if (typeof button === "string") {
        result.push(create(button));
      }
      if (typeof button === "object" && button.type) {
        result.push(
          create(button.type, button.style, button.title, button.action)
        );
      }
    });
  } else if (typeof buttons === "object" && buttons.type) {
    result.push(
      create(buttons.type, buttons.style, buttons.title, buttons.action)
    );
  }
  return result;
}
