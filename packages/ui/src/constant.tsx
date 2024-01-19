import { AlignLeft } from './icons/align-left';
import { AlignCenter } from './icons/align-center';
import { AlignRight } from '././icons/align-right';
import { Bold } from './icons/bold';
import { StrikeThrough } from './icons/strike-through';
import { Italics } from './icons/italics';
import { Code } from './icons/code';
import { Link } from './icons/link';
import { Underline } from './icons/underline';


export enum ElementType {
  PARAGRAPH = 'paragraph',
  HEADING_ONE = 'heading1',
  HEADING_TWO = 'heading2',
  HEADING_THREE = 'heading3',
  HEADING_FOUR = 'heading4',
  HEADING_FIVE = 'heading5',
  HEADING_SIX = 'heading6',
  UNORDERED_LIST = 'unorderedList',
  ORDERED_LIST = 'orderedList',
  LIST_ITEM = 'listItem',
  BULLET_LIST = 'bulletList',
  TASK_LIST_ITEM = 'taskListItem',
  TASK_LIST = 'taskList',
  CODE = 'code',
  CODE_BLOCK = 'codeBlock',
  QUOTE = 'blockquote',
  QUOTE_ITEM = 'quoteItem',
  IMAGE = 'image',
  VIDEO = 'video',
  LINK = 'link',
  MENTION = 'mention',
  DIVIDER = 'divider',
  TABLE_CELL = 'tableCell',
  HIGHLIGHT = 'highlight',

  ITALIC = 'italic',
  STRIKE_THROUGH = 'strike',
  BOLD = 'bold',
  UNDERLINE = 'underline',

  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const ELEMENT_ICONS = {
//   [ElementType.PARAGRAPH]: BodyFilled,
//   [ElementType.HEADING_ONE]: Headline1Filled,
//   [ElementType.HEADING_TWO]: Headline2Filled,
//   [ElementType.HEADING_THREE]: Headline3Filled,
//   [ElementType.ORDERED_LIST]: OrderedFilled,
//   [ElementType.UNORDERED_LIST]: UnorderedFilled,
//   [ElementType.IMAGE]: ImageOutlined,
//   [ElementType.VIDEO]: VideoOutlined,
//   [ElementType.BULLET_LIST]: UnorderedFilled,
//   [ElementType.QUOTE]: QuoteFilled,
//   [ElementType.DIVIDER]: DividingLineFilled,
  [ElementType.CODE]: Code,
//   [ElementType.CODE_BLOCK]: CodeFilled,
  [ElementType.LINK]: Link,
  [ElementType.ITALIC]: Italics,
  [ElementType.BOLD]: Bold,
  [ElementType.UNDERLINE]: Underline,
  [ElementType.STRIKE_THROUGH]: StrikeThrough,
//   [ElementType.TASK_LIST]: CheckboxOutlined,
//   [ElementType.HIGHLIGHT]: HighlightFilled,
//   // Alignment method
  [ElementType.LEFT]: AlignLeft,
  [ElementType.CENTER]: AlignCenter,
  [ElementType.RIGHT]: AlignRight,
};

export const INLINE_BASIC_ELEMENT = [
  ElementType.PARAGRAPH,
  ElementType.HEADING_ONE,
  ElementType.HEADING_TWO,
  ElementType.HEADING_THREE,
  ElementType.BULLET_LIST,
  ElementType.ORDERED_LIST,
  ElementType.TASK_LIST,
  ElementType.QUOTE,
  ElementType.CODE_BLOCK,
];

export const ALIGN_ELEMENT = [ElementType.LEFT, ElementType.CENTER, ElementType.RIGHT];

export const BASIC_ELEMENT = [
  ElementType.PARAGRAPH,
  ElementType.HEADING_ONE,
  ElementType.HEADING_TWO,
  ElementType.HEADING_THREE,
  ElementType.BULLET_LIST,
  ElementType.ORDERED_LIST,
  ElementType.TASK_LIST,
  ElementType.QUOTE,
  ElementType.DIVIDER,
  ElementType.CODE_BLOCK,
  ElementType.IMAGE,
  ElementType.VIDEO,
];

export const MENU_ELEMENTS = [ElementType.BOLD, ElementType.ITALIC, ElementType.STRIKE_THROUGH, ElementType.UNDERLINE, ElementType.CODE];

export const HIGHLIGHT_COLORS = [
  'var(--textCommonPrimary)',
  'var(--rainbowPurple5)',
  'var(--rainbowOrange5)',
  'var(--rainbowTeal5)',
  'var(--rainbowGray5)',
  'var(--rainbowBrown5)',
  'var(--rainbowRed5)',
  'var(--rainbowIndigo5)',
  'var(--rainbowPink5)',
];

export const HIGHLIGHT_BACKGROUNDS = [
  'var(--bgCommonDefault)',
  'var(--rainbowPurple5)',
  'var(--rainbowOrange5)',
  'var(--rainbowTeal5)',
  'var(--rainbowGray5)',
  'var(--rainbowBrown5)',
  'var(--rainbowRed5)',
  'var(--rainbowIndigo5)',
  'var(--rainbowPink5)',
];