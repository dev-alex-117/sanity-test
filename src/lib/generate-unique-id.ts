export const generateUniqueId = (prefix = '') => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base 36 string
  const randomPart = Math.random().toString(36).substring(2, 8); // Generate a random string
  if (prefix) {
    return `${prefix}-${timestamp}-${randomPart}`; // Combine prefix with both parts
  }
  // If no prefix is provided, just return the timestamp and random part
  return `${timestamp}-${randomPart}`; // Combine both parts
};
