import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children?: ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
