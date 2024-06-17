import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      
      {children}
      Footer
    </main>
  );
};

export default Layout;
