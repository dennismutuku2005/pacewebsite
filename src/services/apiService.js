
const API_BASE_URL = 'https://api.pacewisp.co.ke/endpoints/user';

export const apiService = {
  // Applications
  submitApplication: async (data) => {
    const response = await fetch(`${API_BASE_URL}/applications.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Content (Terms & Privacy)
  getTerms: async () => {
    const response = await fetch(`${API_BASE_URL}/content.php?type=terms`);
    return response.json();
  },

  getPrivacyPolicy: async () => {
    const response = await fetch(`${API_BASE_URL}/content.php?type=privacy`);
    return response.json();
  },

  // Blogs
  getBlogs: async () => {
    const response = await fetch(`${API_BASE_URL}/blogs.php`);
    return response.json();
  }
};
