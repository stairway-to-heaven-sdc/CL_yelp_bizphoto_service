import React from 'react';
import { BizProvider } from './biz-context';
import { MediaProvider } from './media-context';
import { UserProvider } from './user-context';

const AppProviders = ({ children }) => (
  <BizProvider>
    <MediaProvider>
      <UserProvider>{children}</UserProvider>
    </MediaProvider>
  </BizProvider>
);

export default AppProviders;
