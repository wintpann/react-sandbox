import { Theme } from '@theme/theme.type';
import { ReactNode } from 'react';
import { Classes } from '@utils/css';

export type GlobalProps = {
  theme?: Theme,
  children?: ReactNode,
  classes?: Classes<'container'>
}
