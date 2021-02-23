import React from 'react';

import ImageGrid from '../components/ImageGrid';
import UploadForm from '../components/UploadForm';

const HomePage = () => {
    return ( <div>
        <UploadForm /> 
        <ImageGrid />
              
    </div> );
}
 
export default HomePage;