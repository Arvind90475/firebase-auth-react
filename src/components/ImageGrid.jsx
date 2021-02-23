import useFireStore from '../hooks/useFireStore';

import { motion} from 'framer-motion'


const ImageGrid = () => {
    const {docs:images} = useFireStore('images');
    return (
        <div className='img-grid'>
            {images && images.map(({id,url}) => (
                <motion.div
                    layout
                    key={id} 
                    className="img-wrap"
                    whileHover={{opacity:1 }}
                >
                    <motion.img 
                        src={url} 
                        alt="firestore-imgs"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div> );
}
 
export default ImageGrid;