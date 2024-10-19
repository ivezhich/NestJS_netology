import multer from 'multer';


const STORAGE_PATH = 'file_storage';
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, STORAGE_PATH);
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const multerStorage = multer({ storage })
export { multerStorage, STORAGE_PATH };