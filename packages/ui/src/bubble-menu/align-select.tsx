import { Editor } from '@tiptap/react';
import React, { useEffect, useState } from 'react';
import { ELEMENT_ICONS, ElementType, ALIGN_ELEMENT } from '../constant';
import { name2Command } from './utils';

interface IAlignSelect {
  editor: Editor;
  setClose: ()=> void;
}

export const AlignSelect = (props: IAlignSelect) => {
  const { editor, setClose } = props;

  const activeFns = ALIGN_ELEMENT.map(element => {
    const { args, activeArgs } = name2Command(element);
    return {
      element,
      // should check paragraph and heading
      // @ts-ignore
      isActive: () => editor.isActive(...(activeArgs || args))
    };
  });

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, [])

  const activeItem = activeFns.find(fn => fn.isActive())?.element || ElementType.LEFT;
  const ActiveIcon = ELEMENT_ICONS[activeItem];

  const handleSelect = (element: ElementType) => {
    const { fnName, args } = name2Command(element);
    console.log('fnName', fnName, args);
    editor.chain().focus()[fnName](...args).run();
    setShow(false);
  }

  return (
    <div onClick={setClose}>
     <div className="simple-editor-select-content" onClick={() => setShow(!show)}>
      <ActiveIcon/>
    </div>
     {show && <div className="simple-editor-select-popover">
      {ALIGN_ELEMENT.map(be => {
        const Icon = ELEMENT_ICONS[be];
        return (
          <div className="simple-editor-select-item" key={be} onClick={() => handleSelect(be)}>
            <Icon/>
          </div>
        );
      })}
     </div>}
    {/* <Select
      listCls={styles.listCls}
      dropdownMatchSelectWidth={false}
      value={activeItem}
      onSelected={(option) => {
        const value = option.value as ElementType;
        const { fnName, args } = name2Command(value);
        editor.chain().focus()[fnName](...args).run();
      }}
      renderValue={(option) => {
        const Icon = ELEMENT_ICONS[option.value];
        return <Icon/> as any;
      }}
      options={ALIGN_ELEMENT.map(be => {
        const Icon = ELEMENT_ICONS[be];
        return {
          label: (
            <div className={styles.label}>
              <Icon/>
              {strings[be]}
            </div>
          ) as any,
          value: be,
        };
      })}
    /> */}
    </div>
  );
};