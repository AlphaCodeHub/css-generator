import React from 'react';
import { App } from './src/layouts';
import 'z/css/global.scss';

/**
 * @param {{element: import('react').ReactElement, props: import('gatsby').PageProps }} a
 */
function wrapPageElement({ element, props }) {
  return <App {...props}>{element}</App>
};

export { wrapPageElement };
