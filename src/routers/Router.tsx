import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';

export const Router: React.VFC<Record<string, unknown>> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
