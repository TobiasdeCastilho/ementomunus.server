import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { BlockedOptions as BlockedOption } from 'src/decorators/blocked.decorator'

@Injectable()
export class BlockedGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const option = this.reflector.get<BlockedOption>(
			'blocked-option',
			context.getHandler(),
		)

		switch (option) {
			case 'IllegalAccess':
				throw new HttpException('Unavaliable For Legal Reasons', 451)
			default:
				throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED)
		}
	}
}

