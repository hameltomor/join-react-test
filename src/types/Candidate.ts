export enum CandidateState {
	submitted = "submitted",
	inReview = "in review",
	notFit = "not a fit",
	hired = "hired"
};


export type Candidate = {
	_id: string
	fullName?: string,
	phone?: string,
	email?: string,
	password?: string,
	avatar?: string,
	score?: number,
	applied_on: Date
	state?: CandidateState
};
