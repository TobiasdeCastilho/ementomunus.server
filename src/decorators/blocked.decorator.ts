import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { BlockedGuard } from 'src/guards/blocked.guard'

export type BlockedOptions = 'NotImplemented' | 'IllegalAccess'

export function Blocked(option: BlockedOptions = 'NotImplemented') {
	return applyDecorators(
		SetMetadata('blocked-option', option),
		UseGuards(BlockedGuard),
	)
}

