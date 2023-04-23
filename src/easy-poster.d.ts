export type PosterNodeType = 'node' | 'stage' | 'group' | 'image' | 'text';

export interface PosterNodeBound {
  left: number;
  top: number;
  width: number;
  height: number
}

export type TStyleValue = string | number;

export type TStylePosition = 'relative' | 'absolute';

export type TStyleFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type TStyleWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type TStyleJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';

export type TStyleAlignItems = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';

export type TStyleAlignContent = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-around' | 'space-between';

export type TStyleAlignSelf = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';

export interface PosterBaseStyle {
  width?: TStyleValue;
  height?: TStyleValue;
  maxWidth?: TStyleValue;
  maxHeight?: TStyleValue;
  minWidth?: TStyleValue;
  minHeight?: TStyleValue;
  margin?: string;
  padding?: string;
  position?: TStylePosition;
  top?: TStyleValue;
  right?: TStyleValue;
  bottom?: TStyleValue;
  left?: TStyleValue;
  flex?: number;
  flexDirection?: TStyleFlexDirection;
  flexBasis?: TStyleValue;
  flexGrow?: number;
  flexWrap?: TStyleWrap;
  flexShrink?: number;
  justifyContent?: TStyleJustifyContent;
  alignItems?: TStyleAlignItems;
  alignContent?: TStyleAlignContent;
  alignSelf?: TStyleAlignSelf;
}

export type PosterType = 'png' | 'jpeg' | 'jpg';
