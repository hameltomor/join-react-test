import { NextApiRequest, NextApiResponse } from 'next'
import CandidatesController from 'controllers/candidates'
import { isArray } from 'util'

/**
 * /api/candidates/{id}
 * [GET, PUT, DELETE]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const candidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { query: { id }, method, body } = req
	const candidatesController = new CandidatesController()

	if (isArray(id)) {
		res.status(400).end(`Wrong type of candidate id`)
		return
	}

	switch (method) {
		case 'GET':
			const candidates = await candidatesController.getById(id);
			res.status(200).json(candidates)
			break
		case 'PUT':
			const updatedCandidate = await candidatesController.update(body);
			res.status(200).json(updatedCandidate)
			break
		case 'DELETE':
			await candidatesController.delete(id);
			res.status(200).end(`Candidate was deleted`)
			break
		default:
			res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default candidateHandler
