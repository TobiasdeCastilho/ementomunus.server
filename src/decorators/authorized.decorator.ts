import { applyDecorators, UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/guards/auth.guard'

export function Authorized() {
	return applyDecorators(UseGuards(AuthGuard))
}

