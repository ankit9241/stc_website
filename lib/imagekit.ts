export const imagekitConfig = {
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
};

export async function uploadToImageKit(file: File, fileName: string): Promise<{ url: string; fileId: string }> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', fileName);
  formData.append('folder', '/images');

  const response = await fetch('/api/imagekit/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response.json();
}

export async function deleteFromImageKit(fileId: string): Promise<void> {
  const response = await fetch('/api/imagekit/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fileId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete image');
  }
}
