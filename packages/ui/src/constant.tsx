import { 
  ParagraphLeft, ParagraphCenter, ParagraphRight,
  Bold,
  Strikethrough,
  Underline,
  Italic,
  Link,
  Embed
} from '@repo/icons';


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
  Embed = 'Embed',
  Embed_BLOCK = 'EmbedBlock',
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
  [ElementType.Embed]: Embed,
//   [ElementType.Embed_BLOCK]: EmbedFilled,
  [ElementType.LINK]: Link,
  [ElementType.ITALIC]: Italic,
  [ElementType.BOLD]: Bold,
  [ElementType.UNDERLINE]: Underline,
  [ElementType.STRIKE_THROUGH]: Strikethrough,
//   [ElementType.TASK_LIST]: CheckboxOutlined,
//   [ElementType.HIGHLIGHT]: HighlightFilled,
//   // Alignment method
  [ElementType.LEFT]: ParagraphLeft,
  [ElementType.CENTER]: ParagraphCenter,
  [ElementType.RIGHT]: ParagraphRight,
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
  ElementType.Embed_BLOCK,
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
  ElementType.Embed_BLOCK,
  ElementType.IMAGE,
  ElementType.VIDEO,
];

export const MENU_ELEMENTS = [ElementType.BOLD, ElementType.ITALIC, ElementType.STRIKE_THROUGH, ElementType.UNDERLINE, ElementType.Embed];

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