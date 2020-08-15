import { NextApiRequest, NextApiResponse } from 'next'
import CandidatesController from 'controllers/candidates'

/**
 * /api/candidates
 * [GET, POST]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const candidatesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req
	const candidatesController = new CandidatesController()

	switch (method) {
		case 'GET':
			const candidates = await candidatesController.getAll();
			res.status(200).json(candidates)
			break
		case 'POST':
			const createdCandidate = await candidatesController.create(body);
			res.status(201).json(createdCandidate)
			break
		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default candidatesHandler
