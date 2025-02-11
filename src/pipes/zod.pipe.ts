import {
	ArgumentMetadata,
	HttpException,
	HttpStatus,
	PipeTransform,
} from '@nestjs/common'
import { ZodError, ZodTypeAny } from 'zod'

export class ZodPipe implements PipeTransform {
	constructor(private schema: ZodTypeAny) {}

	transform(value: any, _: ArgumentMetadata) {
		try {
			return this.schema.parse(value)
		} catch (error) {
			throw new HttpException(error.errors, HttpStatus.BAD_REQUEST)
		}
	}
}

function parseZodTypedErrors(value: any, error: ZodError<any>) {
	throw new Error('Function not implemented.')
}

