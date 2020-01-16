/** type to describe generic value or array of generic values */
type GenericValueOrArray<T> = T | T[];

/** button action */
export type ButtonAction = () => void;

/** positive button type */
export const buttonTypePositive = "positive";
/** negative button type */
export const buttonTypeNegative = "negative";
/** neutral button type */
export const buttonTypeNeutral = "neutral";
/** custom button type */
export const buttonTypeCustom = "custom";

/** default button types */
type ButtonTypeMain = typeof buttonTypePositive | typeof buttonTypeNegative;

/** all button types */
export type ButtonType =
  | typeof buttonTypeNeutral
  | typeof buttonTypeCustom
  | ButtonTypeMain;

/** positive button class name */
export const buttonStylePositive = "primary";
/** negative button class name */
export const buttonStyleNegative = "danger";
/** neutral button class name */
export const buttonStyleNeutral = "secondary";

/** predefined button styles */
type ButtonStylePredefined =
  | typeof buttonStylePositive
  | typeof buttonStyleNegative
  | typeof buttonStyleNeutral;

/** button styles */
export type ButtonStyle = string | ButtonStylePredefined;

/** base button interface */
export interface IButton {
  type: ButtonType;
  title?: string;
  disabled?: boolean;
  style?: ButtonStyle;
  action?: ButtonAction;
}

/** positive button interface */
export interface IButtonPositive extends IButton {
  type: typeof buttonTypePositive;
  handleEnterKey?: boolean;
}

/** negative button interface */
export interface IButtonNegative extends IButton {
  type: typeof buttonTypeNegative;
  handleEscapeKey?: boolean;
}

/** extender interface for the neutral and custom buttons */
interface IButtonCustomized extends IButton {
  title: string;
  action: ButtonAction;
  handleKey?: string;
}

/** neutral button interface */
export interface IButtonNeutral extends IButtonCustomized {
  type: typeof buttonTypeNeutral;
}

/** custom button interface */
export interface IButtonCustom extends IButtonCustomized {
  type: typeof buttonTypeCustom;
  style: ButtonStyle;
}

/** union button type */
type ButtonUnion =
  | ButtonTypeMain
  | IButtonPositive
  | IButtonNegative
  | IButtonNeutral
  | IButtonCustom;

/** button type */
export type Button = GenericValueOrArray<ButtonUnion>;
