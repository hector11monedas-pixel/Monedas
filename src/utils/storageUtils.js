import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

/**
 * Uploads an image file to Firebase Storage under the current user's directory.
 * @param {File} file The image file to upload.
 * @param {string} uid The current user's ID.
 * @returns {Promise<string>} The download URL of the uploaded image.
 */
export const uploadCoinImage = async (file, uid) => {
    if (!file) throw new Error("No file provided");
    if (!uid) throw new Error("User must be authenticated to upload images");

    // Create a unique filename using timestamp
    const timestamp = Date.now();
    const extension = file.name.split('.').pop() || 'jpg';
    const filePath = `users/${uid}/coins/${timestamp}_${Math.random().toString(36).substring(7)}.${extension}`;

    const storageRef = ref(storage, filePath);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
