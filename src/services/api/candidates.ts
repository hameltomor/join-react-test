import { create as init, ApiResponse } from 'apisauce';

import { Candidate } from 'types/Candidate'

const { REST_DB_API, REST_DB_KEY } = process.env;

const API = init({
	baseURL: `${REST_DB_API}/rest`,
	headers: {
		'Content-Type': 'application/json',
		'x-apikey': REST_DB_KEY
	},
});

export const getAll = async (): Promise<Candidate[]> => {
	const { data: candidates = [] } = await API.get(`/candidates`) as ApiResponse<Candidate[]>;
	return candidates;
};

export const getById = async (id: string): Promise<Candidate> => {
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

export const remove = async (id: string): Promise<void> => {
	await API.delete(`/candidates/${id}`) as ApiResponse<void>;
};
