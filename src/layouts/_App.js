import React from 'react';
import { AppNav } from 'z/components';
import * as styles from './css/app.module.scss';

const App = props => (
  <>
    <AppNav />
    <main className={styles.main}>{props.children}</main>
  </>
);

export default App;
