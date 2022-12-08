import React from 'react';
import Admonition from '@theme/Admonition';

enum TYPE {
  note = 'note',
  tip = 'tip',
  info = 'info',
  caution = 'caution',
  danger = 'danger',
}

const ListAdmonition = ({
  label,
  type = TYPE.info,
  title = 'On this page, we cover:',
  icon = '📝',
  children,
}) => {
  switch (label) {
    case 'SDK reference':
      type = TYPE.info;
      title = label;
      icon = '📚';
      break;
    case 'API reference':
      type = TYPE.info;
      title = label;
      icon = '📚';
      break;
    case 'Guides':
      type = TYPE.info;
      title = label;
      icon = '📝';
      break;
    case 'Example':
      type = TYPE.tip;
      title = label;
      icon = '💻';
      break;
  }

  return (
    <Admonition type={type} title={title} icon={icon}>
      {children}
    </Admonition>
  );
};

export default ListAdmonition;
