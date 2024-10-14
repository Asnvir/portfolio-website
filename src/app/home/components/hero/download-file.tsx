'use server';

export default async function downloadFile() {
  const fileName = 'CV_Software_Engineer_Artur_Kopytin.pdf';
  const fileId = process.env.GOOGLE_DRIVE_RESUME_FILE_ID;
  const fileUrl = `https://drive.google.com/u/1/uc?id=${fileId}&export=download`;

  try {
    const response = await fetch(fileUrl);

    const arrayBuffer = await response.arrayBuffer();

    const base64String = Buffer.from(arrayBuffer).toString('base64');

    return { fileName, data: base64String };
  } catch (error) {
    throw new Error(`Error downloading file`);
  }
}
