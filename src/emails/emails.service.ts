import { EmailSentException, EmailNotExistsException } from './../common/exceptions';
import { Injectable } from '@nestjs/common';
import { ClientResponse } from "@sendgrid/client/src/response"
import { MailData } from "@sendgrid/helpers/classes/mail"
import config from '../config';
import * as sgMail from '@sendgrid/mail';


@Injectable()
export class EmailsService {

	private readonly sendgrid

	constructor() {
		this.sendgrid = sgMail
		this.sendgrid.setApiKey(config.services.sendgrid.apiKey)
	}

	public async sendForgottenPasswordEmail(email: string, token: string) {
		const mailData: Omit<MailData, "from"> = {
			to: email,
			templateId: config.services.sendgrid.templates.forgottenPassword,
			subject: 'Obnova hesla',
			dynamicTemplateData: {
				email,
				subject: 'Obnova hesla',
				resetLink: `https://studiooo.cz/auth/reset-password?token=${token}`,
				randomness: Math.random()
			}
		}
		await this.sendEmail(mailData)
	}

	public async sendRegistrationEmail(email: string, token: string) {
		const mailData: Omit<MailData, "from"> = {
			to: email,
			templateId: config.services.sendgrid.templates.registration,
			subject: 'Aktivace účtu',
			dynamicTemplateData: {
				verificationLink: `https://studiooo.cz/api/auth/verify-email?token=${token}`,
				randomness: Math.random()
			}
		}
		try {
			return await this.sendEmail(mailData)

		} catch (e) {
			throw new EmailNotExistsException()
		}
	}

	public async sendDeleteAccountEmail(email: string) {
		const mailData: Omit<MailData, "from"> = {
			to: email,
			templateId: config.services.sendgrid.templates.deleteAccount,
			subject: 'Smazání účtu',
			dynamicTemplateData: {
				randomness: Math.random()
			}
		}
		try {
			return await this.sendEmail(mailData)

		} catch (e) {
			throw new EmailNotExistsException()
		}
	}

	public async sendEmail(data: Omit<MailData, "from">): Promise<[ClientResponse, unknown]> {
		try {

			const response = await this.sendgrid.send({
				from: {
					name: config.services.sendgrid.emailsFrom.name,
					email: config.services.sendgrid.emailsFrom.email
				},
				...data
			} as any)
			console.log(response);

			return response
			

		} catch (e) {
			throw new EmailSentException()
		}
	}
}
