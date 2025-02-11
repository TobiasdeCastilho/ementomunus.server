import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly jwt: JwtService) {}

	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest()
		const accessTokenHeader = request.headers.authorization
		const token = accessTokenHeader.replace('Bearer ', '')
		if (!token) return false

		const tokenData = this.jwt.verify(token, { secret: process.env.JWT_SECRET })
		if (!tokenData) return false

		request.user = tokenData
		return true
	}
}

