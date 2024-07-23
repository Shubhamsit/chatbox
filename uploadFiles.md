### upload fils like images using multer and cloudinary

- user se multer ke through file lenge aur apne temp server pe rakh denge
- uske baad cloudinary ka use kare local storage se file server pe daal denge (cloudinary server)

- ek ham utils folder ke andar file banayenge cloudinary.js( iska simple sa goal h ki jo file hamare backend server pe aa chuka h uska local path lo aur cloudinary pe uplad kar do)

```
setup configuration for cloudinary using cloud name , api keys, secret key etc refer di0umentation  for configuration



ham ek functio banayenge jisme ham image /file ka local path denge aur wo cloudinary pe upload karke hame ek response me url de dega

```
- cloudinary.js
```javascript
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({   // enter your credentials
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("could not find path");
      return null;
    }

    //upload filre on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded succsfully
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temp file as the uplad operation got failed

    return null;
  }
};

export { uploadOnCloudinary };
```


-   now we will create middleware using multer   so that whereever i required file uploading thei will use it

### create multerMiddleware.js file inside middleware folder


```javascript 
