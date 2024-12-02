import React from 'react';

export default function layout({children}){
  return (
    <div className='flex'>
      {/*sidebar*/}
      <sidebar />
      <div className='w-full'>
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
