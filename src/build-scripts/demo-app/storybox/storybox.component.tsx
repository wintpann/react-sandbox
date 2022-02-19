import React, { createContext, FC, ReactNode, useContext } from 'react';
import { noop } from '@utils/common';
import * as Styled from '@demo-app/storybox/storybox.styled';
import { ControlsContextType } from '@demo-app/storybox/storybox.type';
import { RenderControl } from '@demo-app/storybox/controls';

export const ControlsContext = createContext<ControlsContextType>({
    controls: {},
    updateControlValue: noop,
    deleteControl: noop,
    createControl: noop,
});

export const StoryBox: FC<{ children: ReactNode }> = ({ children }) => {
    const { controls } = useContext(ControlsContext);

    return (
        <Styled.BoxStyled>
            <Styled.ControlsPanelStyled width={50}>
                {Object.entries(controls).map(([id, control]) => (
                    <RenderControl key={id} control={control} />
                ))}
            </Styled.ControlsPanelStyled>
            <Styled.StoryPanelStyled width={50}>{children}</Styled.StoryPanelStyled>
        </Styled.BoxStyled>
    );
};
