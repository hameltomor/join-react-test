import { create, ApisauceInstance, ApiResponse } from 'apisauce'

import { Candidate } from 'types/Candidate'

/**
 * Allows to manage the 'candidates' collection by RestDB API.
 * @class CandidatesController
 */
class CandidatesController {
	private readonly restdbApi: ApisauceInstance

	constructor() {
		const { REST_DB_API, REST_DB_KEY } = process.env
		this.restdbApi = create({
			baseURL: `${REST_DB_API}/rest/candidates`,
			headers: {
				'Content-Type': 'application/json',
				'x-apikey': REST_DB_KEY,
			},
		})
	}

	/**
	 * Creates a new record with candidate in DB.
	 * @param {Candidate} rawCandidate
	 * @returns {Promise<Candidate>}
	 * @memberof CandidatesController
	 */
	async create(rawCandidate: Candidate): Promise<Candidate> {
		const { data: candidate } = await this.restdbApi.post(``, rawCandidate) as ApiResponse<Candidate>

		if (!candidate || !candidate._id) {
			throw new Error(`An error occurred during creation`)
		}

		return candidate
	}

	/**
	 * Returns all candidates.
	 * @returns {Promise<Candidate[]>}
	 * @memberof CandidatesController
	 */
	async getAll(): Promise<Candidate[]> {
		const { data: candidates = [] } = await this.restdbApi.get(``) as ApiResponse<Candidate[]>
		return candidates
	}

	/**
	 * Returns the candidate by id
	 * @param {(string | number)} id
	 * @returns {Promise<Candidate>}
	 * @memberof CandidatesController
	 */
	async getById(id: string | number): Promise<Candidate> {
		const { data: candidate } = await this.restdbApi.get(`/${id}`) as ApiResponse<Candidate>

		if (!candidate || !candidate._id) {
			throw new Error(`The candidate doesn't exist`)
		}

		return candidate
	}

	/**
	 * Updates the candidate by id
	 * @param {Candidate} rawCandidate
	 * @returns {Promise<Candidate>}
	 * @memberof CandidatesController
	 */
	async update(rawCandidate: Candidate): Promise<Candidate> {
		const { data: candidate } = await this.restdbApi.put(`/${rawCandidate._id}`, rawCandidate) as ApiResponse<Candidate>

		if (!candidate || !candidate._id) {
			throw new Error(`An error occurred during the update`)
		}

		return candidate
	}

	/**
	 * Deletes the candidate by id
	 * @param {Candidate} rawCandidate
	 * @returns {Promise<Candidate>}
	 * @memberof CandidatesController
	 */
	async delete(id: string | number): Promise<void> {
		await this.restdbApi.delete(`/${id}`) as ApiResponse<Candidate>
	}

	/**
	 * Validate the `candidate` scheme.
	 * @private
	 * @returns {boolean}
	 * @memberof CandidatesController
	 */
	// private validate(): boolean {
	// 	//
	// }
}

export default CandidatesController
