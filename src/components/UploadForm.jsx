import { useState, useEffect } from "react";

import ProgressBar from './ProgressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')

    const handleChange = ({target}) => {
        setError('');
        const fileTypes = ['image/png', 'image/jpeg']
        let selected = target.files[0];
        if(selected && fileTypes.includes(selected.type)) {
            setFile(selected)
        }else{
            setError('Only png or jpeg file is allowed')
        }
    }

   

    return ( 
            <form>
                <label>
                <input type="file" onChange={handleChange} name="image" />
                <span>+</span>
                </label>
                <div className="error output">
                    {error}
                    {file && <div>{file.name}</div>}
                </div>
                {file && <ProgressBar file={file} setFile={setFile} />}
            </form>
     );
}
 
export default UploadForm;