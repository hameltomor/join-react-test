import { create as init, ApiResponse } from 'apisauce';

import { Candidate } from 'types/Candidate'

const { API_URL } = process.env;

const API = init({
	baseURL: `${API_URL || ''}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getAll = async (): Promise<Candidate[]> => {
	const { data: candidates = [] } = await API.get(`/candidates`) as ApiResponse<Candidate[]>;
	return candidates;
};

export const getById = async (id: string | number): Promise<Candidate> => {
	const { data: candidate } = await API.get(`/candidates/${id}`) as ApiResponse<Candidate>;

	if (!candidate || !candidate._id) {
		throw new Error('Not found')
	}

	return candidate;
};

export const create = async (candidate: Candidate): Promise<Candidate> => {
	const { data: createdCandidate } = await API.post(`/candidates`, candidate) as ApiResponse<Candidate>;

	if (!createdCandidate || !createdCandidate._id) {
		throw new Error('Error during creation')
	}

	return candidate;
};

export const update = async (candidate: Candidate): Promise<Candidate> => {
	const { data: updatedCandidate } = await API.put(`/candidates/${candidate._id}`, candidate) as ApiResponse<Candidate>;

	if (!updatedCandidate || !updatedCandidate._id) {
		throw new Error('Error during the update')
	}

	return candidate;
};

export const remove = async (id: string | number): Promise<void> => {
	await API.delete(`/candidates/${id}`) as ApiResponse<void>;
};
