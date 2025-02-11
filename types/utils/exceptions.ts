import { HttpStatus } from '@nestjs/common'

export type BackendException = {
	message: string
	status: HttpStatus
}

export const EXCEPTIONS = {
	USER_OR_PASSWORD_INCORRECT: {
		message: 'User or password incorrect',
		status: HttpStatus.NOT_FOUND,
	},
	USER_ALREADY_EXISTS: {
		message: 'User already exists',
		status: HttpStatus.CONFLICT,
	},
}

