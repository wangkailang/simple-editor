import { StarterKit } from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';

export const defaultExtensions = [
  StarterKit.configure({
    // history: false,
    // document: false,
    dropcursor: {
      width: 2,
      class: 'drop-cursor',
    },
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph', 'image'],
    defaultAlignment: 'left',
  }),
  Placeholder.configure({
    placeholder: ({ node, editor }) => {
      if (node.type.name === 'heading') {
        return `Heading ${node.attrs.level}`;
      } else if (editor.isActive('codeBlock') || node.type.name === 'codeBlock') {
        return 'code block';
      }

      return 'Type something...';
    },
    includeChildren: false,
  }),
];