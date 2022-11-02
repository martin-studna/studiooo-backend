import { HttpException, HttpStatus } from '@nestjs/common';


export class EmailSentException extends HttpException {
	constructor() {
		super("The email has not been sent successfully.", HttpStatus.BAD_REQUEST)
	}
}

export class EmailNotExistsException extends HttpException {
	constructor() {
		super("The email does not exists.", HttpStatus.BAD_REQUEST)
	}
}