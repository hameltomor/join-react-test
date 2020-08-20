import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { observer, useObserver } from 'mobx-react-lite'

import { useStore, initializeStore } from 'store/index'

import Head, { IHead } from 'components/Layout/Head'
import CandidateItem from 'components/Partials/CandidateItem'

import * as CandidatesApi from 'services/api/candidates'

import { Candidate } from 'types/Candidate'

const headProps: IHead = {
	pageTitle: 'Recruiter page | List',
	pageDescription: 'Review list of applications.',
}

interface IRecruiter {
	candidates: Candidate[]
}

const Recruiter: NextPage<IRecruiter> = observer((props) => {
	const candidatesStore = useStore(props.candidates)
	const { candidates, updateCandidate, removeCandidate } = candidatesStore
	return useObserver(() => (
		<section>
			<Head {...headProps} />
			<h1>Recruiter page: {candidates.length} applications</h1>
			{candidates.map(c => <CandidateItem
				key={c._id}
				candidate={c}
				updateCandidate={updateCandidate}
				removeCandidate={removeCandidate}
			/>)}
		</section>
	))
})

export const getServerSideProps: GetServerSideProps<IRecruiter> = async (_ctx) => {
	const candidates = await CandidatesApi.getAll()
	const store = initializeStore(candidates)
	return {
		props: {
			candidates: store.candidates
		}
	}
}

export default Recruiter
