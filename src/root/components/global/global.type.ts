import { Theme } from '@theme/theme.type';
import { ReactNode } from 'react';

export type GlobalProps = {
  theme?: Theme;
  children?: ReactNode;
}
