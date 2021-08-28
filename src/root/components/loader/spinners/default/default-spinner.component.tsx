import { FC } from 'react';
import { SpinnerProps } from '@components/loader/loader.type';
import * as Styled from '@components/loader/spinners/default/default-spinner.styled';
import { classify } from '@utils/styled';

const Classified = classify(Styled);

export const DefaultSpinner: FC<SpinnerProps> = Classified.DefaultSpinnerStyled;
