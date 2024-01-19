import { Editor } from '@tiptap/react';
import { ELEMENT_ICONS, ElementType, MENU_ELEMENTS } from '../constant';
import { clearCode, name2Command } from './utils';

interface IMenuBtn {
  editor: Editor;
}

export const MenuBtn = (props: IMenuBtn) => {
  const { editor } = props;
  const hideBold = editor.isActive('heading');
  return (
    <div>
      {MENU_ELEMENTS.filter(element => {
        return !(hideBold && element === ElementType.BOLD);
      }).map(element => {
        const isActive = editor.isActive(element);
        const { fnName } = name2Command(element);
        const Icon = ELEMENT_ICONS[element];
        return (
          <button
            key={element}
            // className={classNames(styles.menuItem, isActive && styles.menuActive)}
            onClick={() => {
              clearCode(editor, element);
              if (editor.isActive('heading') && element === ElementType.BOLD) return;
              editor.chain().focus()[fnName]().run();
            }}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};