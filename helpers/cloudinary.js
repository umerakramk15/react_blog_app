import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_API,
});

const uploadFileOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (!response) {
      console.log("Error in Response");
    }

    return response;
  } catch (error) {
    console.log("Error in While Uploading Cloudinary Area", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadFileOnCloudinary };
