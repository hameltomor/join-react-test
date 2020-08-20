import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { observer, useObserver } from 'mobx-react-lite'

import { useStore } from 'store/index'

import Head, { IHead } from 'components/Layout/Head'
import CandidateForm from 'components/Partials/CandidateForm'

import { Candidate } from 'types/Candidate'

const headProps: IHead = {
	pageTitle: 'Candidate page | Form',
	pageDescription: 'Create a new application to the company.',
}

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
			<Head {...headProps} />
			<h1>Сandidate page</h1>
			<CandidateForm onFormSubmit={handleOnCreate} />
		</section>
	))
})

export default CandidatePage
