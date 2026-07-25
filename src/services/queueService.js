import axios from 'axios';

const API_URL = 'http://localhost:8080/api/queue';

// Get the current status of a specific doctor (e.g., ID 1)
export const getQueueStatus = async (id) => {
    return await axios.get(`${API_URL}/status/${id}`); // We will need to add this endpoint to Java later!
};

// Update the token number
export const updateQueue = async (id, number) => {
    return await axios.put(`${API_URL}/update/${id}/${number}`);
};

// Create a new doctor queue (for setup)
export const createQueue = async (name) => {
    return await axios.post(`${API_URL}/create`, {
        doctorName: name,
        currentTokenNumber: 0
    });
};