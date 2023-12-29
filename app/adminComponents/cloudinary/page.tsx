import { Request, Response } from 'express';
import fetch from 'node-fetch';
import FormData from 'form-data';

const cloudinaryUpload = async (req: Request, res: Response) => {
  const cloudName = 'dcq9dwrsb';
  const presetName = 'l4ng65bl';

  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.file as UploadedFile; 

    const formData = new FormData();
    formData.append('file', file.data);
    formData.append('upload_preset', presetName);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    res.status(200).json({ secureUrl: data.secure_url });
  } catch (error) {
    console.error('Error uploading image: ', error);
    res.status(500).json({ error: 'Error uploading image' });
  }
};

export default cloudinaryUpload;
