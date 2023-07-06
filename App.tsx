import React from 'react';

import Setup from '@TopStories/Setup';

const App: React.FC = () => {
    console.log('====================================');
    console.log('BUNDLE_START_TIME: ', __BUNDLE_START_TIME__);
    console.log('DEV: ', __DEV__);
    console.log('====================================');

    return (
        <>
            <Setup />
        </>
    );
};

export default App;
