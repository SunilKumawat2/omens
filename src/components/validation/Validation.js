
/**
 * Validates if the input contains only alphabets and spaces.
 * @param {string} name - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isAlphabetical = (name) => /^[A-Za-z\s]+$/.test(name);

/**
 * Validates if the input is a valid email.
 * @param {string} email - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * Validates if the input contains a valid phone number.
 * Allows international format by stripping non-numeric characters.
 * @param {string} phone - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidPhone = (phone) => {
    const numericPhone = phone.replace(/\D/g, ''); // Remove all non-numeric characters
    return numericPhone.length >= 7 && numericPhone.length <= 15; // Check valid length for phone numbers
};

/**
 * Validates if the input is a valid Instagram profile link.
 * @param {string} url - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidInstagramLink = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._-]+\/?$/;
    return regex.test(url);
};


/**
 * Validates if the input is a valid Website URL.
 * @param {string} url - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidWebsite = (url) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    return regex.test(url);
};

/**
 * Validates if the input is a valid YouTube URL.
 * Supports YouTube handles, video links, and channel links.
 * @param {string} url - The input URL to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidYouTubeLink = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:watch\?v=|channel\/|c\/|@)[a-zA-Z0-9_-]+|youtu\.be\/[a-zA-Z0-9_-]+)$/;
    return regex.test(url);
};

/**
 * Validates if the input is a valid LinkedIn profile link.
 * @param {string} url - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidLinkedInLink = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/|company\/)[a-zA-Z0-9_-]+\/?$/;
    return regex.test(url);
};

/**
 * Validates if the input is a valid Facebook profile/page link.
 * @param {string} url - The input string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
export const isValidFacebookLink = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?$/;
    return regex.test(url);
};
