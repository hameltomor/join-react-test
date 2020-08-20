import { action, observable, computed, ObservableMap } from 'mobx'
import 'mobx-react-lite/batchingForReactDom'

import * as CandidatesApi from 'services/api/candidates'

import { StateTypes } from 'types/State'
import { Candidate } from 'types/Candidate'
import { KeyObjectMap, Primitive } from 'types/Helpers'

class CandidatesStore {
	@observable candidatesStore: ObservableMap<string, Candidate>
	@observable state: StateTypes

	constructor() {
		this.state = StateTypes.None
		this.candidatesStore = observable.map()
	}

	@computed get candidates(): Candidate[] {
		let _candidates: Candidate[] = new Array()
		const valuableKeys = ['fullName', 'email', 'password', 'phone', 'avatar']
		for (const c of this.candidatesStore.values()) {
			let score = 0
			for (const key in c) {
				if (!valuableKeys.includes(key) || !c.hasOwnProperty(key)) {
					continue
				}

				const field = (c as KeyObjectMap<Primitive | Date>)[key]
				if (typeof field !== 'string') {
					continue
				}

				if (field && field.length) {
					score += key === 'avatar' ? 20 : 10
				}
			}
			c.score = score
			_candidates.push(c)
		}
		return _candidates;
	};

	@action
	getCandidate = async (id: string): Promise<Candidate | undefined> => {
		this.state = StateTypes.Loading
		try {
			let candidate = this.candidatesStore.get(id)
			if (candidate && candidate._id) {
				this.state = StateTypes.Done
				return candidate
			}

			candidate = await CandidatesApi.getById(id)
			this.candidatesStore.set(candidate._id, candidate)
			this.state = StateTypes.Done
			return candidate
		} catch (error) {
			this.state = StateTypes.Error
		}
	}

	@action
	creatCandidate = async (rawCandidate: Candidate): Promise<Candidate | undefined> => {
		this.state = StateTypes.Loading
		try {
			const candidate = await CandidatesApi.create(rawCandidate)
			this.state = StateTypes.Done
			this.candidatesStore.set(candidate._id, candidate)
			return candidate
		} catch (error) {
			this.state = StateTypes.Error
		}
	}

	@action
	updateCandidate = async (rawCandidate: Candidate): Promise<Candidate | undefined> => {
		this.state = StateTypes.Loading
		try {
			const candidate = await CandidatesApi.update(rawCandidate)
			this.candidatesStore.set(candidate._id, candidate)
			this.state = StateTypes.Done
			return candidate
		} catch (error) {
			this.state = StateTypes.Error
		}
	}

	@action
	removeCandidate = async (id: string): Promise<void> => {
		this.state = StateTypes.Loading
		try {
			await CandidatesApi.remove(id)
			this.candidatesStore.delete(id)
			this.state = StateTypes.Done
		} catch (error) {
			this.state = StateTypes.Error
		}
	}

	@computed get isLoading(): boolean {
		return this.state === StateTypes.Loading
	}

	initServer = (data: Candidate[]) => {
		if (!data || !Array.isArray(data) || !data.length) return
		this.candidatesStore = observable.map(data.map(c => [c._id, c]))
	}
}

export default CandidatesStore
