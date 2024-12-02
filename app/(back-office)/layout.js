import React from 'react';

export default function layout({children}){
  return (
    <div className='flex'>
      {/*sidebar*/}
      <div className=''>
        Sidebar
      </div>
      <div className=''>
    {/*header*/}
    <h2>Nav bar</h2>
    <main>
        {children}
    </main>
    {/*main*/}
      </div>
      {/*main body*/}
    </div>
  );
};
