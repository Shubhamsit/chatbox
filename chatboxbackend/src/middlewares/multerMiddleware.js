import multer from 'multer';
import path from 'path';

// Configure Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    // Resolve the path to public/temp directory

    cb(null,"./public");
  },
  filename: function (req, file, cb) {

    cb(null, file.originalname );
  }
});

const upload = multer({ storage: storage });

export default upload;
