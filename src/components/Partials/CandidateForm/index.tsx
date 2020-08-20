import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { useFormik } from 'formik'

import Form from 'components/Form'
import Input from 'components/Form/Input';
import Label from 'components/Form/Label';
import Button from 'components/Form/Button';
import Checkbox from 'components/Form/Checkbox';

import { Candidate } from 'types/Candidate'

interface ICandidateForm {
	onFormSubmit: (candidate: Candidate) => Promise<any>;
}

const CandidateForm: React.FC<ICandidateForm> = (props) => {
	const { onFormSubmit } = props;

	const skipFields = [
		'avatar',
		'firstName',
		'lastName',
		'acceptPrivacy'
	];

	const formInit = {
		avatar: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		phone: '',
		acceptPrivacy: false,
	}

	const formik = useFormik({
		initialValues: formInit,
		enableReinitialize: false,
		onSubmit: async (values) => {
			let newCandidate: Candidate = {
				_id: '',
				fullName: `${values.firstName} ${values.lastName}`,
				applied_on: new Date()
			}
			const actualValues = Object.entries(values).reduce(
				(prev: any, [key, value]) => {
					if (skipFields.includes(key)) {
						return prev
					}

					if (value) {
						return { ...prev, [key]: value }
					}

					return prev
				},
				{}
			);
			newCandidate = { ...newCandidate, ...actualValues }
			await onFormSubmit(newCandidate)
		},
	})

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		formik.handleSubmit(event);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col xs={12}>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<Label
						htmlFor="password"
						className="label"
					>
						Email
					</Label>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<Label
						htmlFor="password"
						className="label"
					>
						Password
					</Label>
				</Col>
			</Row>
			<Row>
				<Col xs={6}>
					<Input
						id="firstName"
						name="firstName"
						type="text"
						placeholder="First name"
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					<Label
						htmlFor="firstName"
						className="label"
					>
						First name
					</Label>
				</Col>
				<Col xs={6}>
					<Input
						id="lastName"
						name="lastName"
						type="text"
						placeholder="Last name"
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					<Label
						htmlFor="lastName"
						className="label"
					>
						Last name
					</Label>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Input
						id="phone"
						name="phone"
						type="text"
						placeholder="Phone"
						onChange={formik.handleChange}
						value={formik.values.phone}
					/>
					<Label
						htmlFor="phone"
						className="label"
					>
						Phone
					</Label>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Checkbox
						value={true}
						label="I agree on everything."
						name="acceptPrivacy"
						formikValue={formik.values.acceptPrivacy}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Button type="submit">Send</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default CandidateForm;
