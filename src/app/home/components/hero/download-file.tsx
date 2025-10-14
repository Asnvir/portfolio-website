'use server';

export default async function downloadFile() {
  const fileName = 'CV_Fullstack_Artur_Kopytin.pdf';

  const githubUsername = process.env.GITHUB_USERNAME;
  const githubRepo = process.env.GITHUB_REPO;
  const githubBranch = process.env.GITHUB_BRANCH;
  const githubFilePath = process.env.GITHUB_FILE_PATH;

  const fileUrl = `https://raw.githubusercontent.com/${githubUsername}/${githubRepo}/${githubBranch}/${githubFilePath}`;

  try {
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error(`Failed to download file, status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString('base64');

    return { fileName, data: base64String };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error downloading file: ${error.message}`);
    }
    throw new Error(`Unknow error while downloading the file`);
  }
}
