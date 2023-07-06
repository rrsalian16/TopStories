/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import Setup from '@TopStories/Setup';
import {IconComponentProvider} from '@react-native-material/core';

//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const App: React.FC = () => {
    return (
        //@ts-ignore
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Setup />
        </IconComponentProvider>
    );
};

export default App;
