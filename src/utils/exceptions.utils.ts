import { HttpException } from '@nestjs/common'

import { BackendException } from '../../types/utils/exceptions'

export class APIException extends HttpException {
	constructor({ message, status }: BackendException) {
		super(message, status)
	}
}

