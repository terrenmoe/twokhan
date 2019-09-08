import React from 'react';
import { string } from 'prop-types'

Main.propTypes = {
  classMixin: string
};

export default function Main({classMixin, children}) {
  return (<main className={`Main ${classMixin}`}>{children}</main>);
};
