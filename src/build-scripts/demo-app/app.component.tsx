import React, { FC, useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { camelspace } from '@utils/string';
import css from '@demo-app/stories/app.module.css';
import * as Styled from '@demo-app/app.styled';
import { Global } from '@components/global/global.component';
import { AllStories } from '@demo-app/index';
import { Pullover } from '@components/pullover/pullover.component';
import { ControlsContextType } from '@demo-app/stories/storybox/storybox.type';
import { ControlsContext } from '@demo-app/stories/storybox/storybox.component';

export const App: FC = () => {
    const [controls, setControls] = useState<ControlsContextType['controls']>({});

    const updateControlValue: ControlsContextType['updateControlValue'] = useCallback(
        (id, value) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setControls((prev) => ({ ...prev, [id]: { ...prev[id], value } }));
        },
        [],
    );

    const createControl: ControlsContextType['createControl'] = useCallback((id, control) => {
        setControls((prev) => ({ ...prev, [id]: control }));
    }, []);

    const deleteControl: ControlsContextType['deleteControl'] = useCallback((id) => {
        setControls((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
        });
    }, []);

    return (
        <Global>
            <Router>
                <Pullover iconSize={40}>
                    <Styled.LinksStyled>
                        {AllStories.map(({ name }) => (
                            <Styled.LinkStyled key={name}>
                                <NavLink
                                    to={`/${name.toLowerCase()}`}
                                    activeClassName={css.activeLink}
                                >
                                    {camelspace(name)}
                                </NavLink>
                            </Styled.LinkStyled>
                        ))}
                    </Styled.LinksStyled>
                </Pullover>
                <ControlsContext.Provider
                    value={{ createControl, updateControlValue, deleteControl, controls }}
                >
                    <Styled.AppStyled>
                        <Switch>
                            {AllStories.map(({ name, Story }) => (
                                <Route exact path={`/${name}`} key={name}>
                                    <Story />
                                </Route>
                            ))}
                        </Switch>
                    </Styled.AppStyled>
                </ControlsContext.Provider>
            </Router>

            <ToastContainer theme="dark" />
        </Global>
    );
};
