"use client";

import { EditorContent, useEditor } from '@tiptap/react';
import { defaultExtensions } from './extensions';
import { BubbleMenu } from './bubble-menu';

// interface IEditorCore {
//
// }

export const EditorCore = () => {
  const editor = useEditor({
    extensions: defaultExtensions,
    content: `
      <p>
        This is a basic example of using the <a href="https://www.tiptap.dev" target="_blank" rel="noopener noreferrer">tiptap</a> editor.
      </p>
      <p>
        It’s the same editor you know from the <a href="https://www.tiptap.dev" target="_blank" rel="noopener noreferrer">documentation</a>.
      </p>
    `,
  });

  return (
    <div className="simple-editor h-full">
      {editor && <BubbleMenu editor={editor} />}
      <EditorContent editor={editor} className='simple-editor-content h-full' />
    </div>
  );
}