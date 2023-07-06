import React from 'react';

import Setup from '@TopStories/Setup';
import {IconComponentProvider} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const App: React.FC = () => {
    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Setup />
        </IconComponentProvider>
    );
};

export default App;
