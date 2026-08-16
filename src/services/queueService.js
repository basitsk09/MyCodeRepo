/**
 * @file queueService.js
 * @author MontySk
 * @description API service functions for managing doctor queue operations.
 *              Uses axios to communicate with the backend REST API.
 */

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/queue';

/**
 * Fetches the current queue status for a specific doctor.
 * @param {number} id - The doctor's queue ID.
 */
export const getQueueStatus = async (id) => {
    return await axios.get(`${API_URL}/status/${id}`);
};

/**
 * Updates the current token number for a specific doctor's queue.
 * @param {number} id - The doctor's queue ID.
 * @param {number} number - The new token number to set.
 */
export const updateQueue = async (id, number) => {
    return await axios.put(`${API_URL}/update/${id}/${number}`);
};

/**
 * Creates a new doctor queue entry with an initial token number of 0.
 * @param {string} name - The name of the doctor.
 */
export const createQueue = async (name) => {
    return await axios.post(`${API_URL}/create`, {
        doctorName: name,
        currentTokenNumber: 0
    });
};

/**
 * Deletes a doctor queue entry by its ID.
 * @param {number} id - The doctor's queue ID to delete.
 */
export const deleteQueue = async (id) => {
    return await axios.delete(`${API_URL}/delete/${id}`);
};
