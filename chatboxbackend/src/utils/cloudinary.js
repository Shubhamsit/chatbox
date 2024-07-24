import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration

cloudinary.config({
  // enter your credentials
  cloud_name: "shubhamsit",
  api_key: "529136321845296",
  api_secret: "8bnsZ_9iAG2gLTauIjumt9WrqAU",
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
    // fs.unlinkSync(localFilePath); // remove the locally saved temp file as the uplad operation got failed

    console.log("upload failed in cloud");

    return null;
  }
};

export { uploadOnCloudinary };
