import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { observer, useObserver } from 'mobx-react-lite'

import { useStore } from 'store/index'

import CandidateForm from 'components/Partials/CandidateForm'

import { Candidate } from 'types/Candidate'

const CandidatePage: NextPage = observer(() => {
	const candidatesStore = useStore()
	const router = useRouter()
	const { creatCandidate } = candidatesStore

	const handleOnCreate = async (candidate: Candidate) => {
		await creatCandidate(candidate)
		router.push('/')
	}

	return useObserver(() => (
		<section>
			<h2>Сandidate page</h2>
			<CandidateForm onFormSubmit={handleOnCreate} />
		</section>
	))
})

export default CandidatePage
