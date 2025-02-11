import { Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class ModuleGuard {
	constructor(private readonly reflector: Reflector) {}

	async canActivate() {
		const module = this.reflector.get('modules', this.constructor)

		return true
	}
}

