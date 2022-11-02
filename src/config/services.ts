export default {
	sendgrid: {
		apiKey: process.env.SENDGRID_API_KEY,
		templates: {
			forgottenPassword: process.env.EMAIL_FORGOTTEN_PASSWORD,
			registration: process.env.EMAIL_REGISTRATION,
			deleteAccount: process.env.EMAIL_DELETE_ACCOUNT,
		},
		emailsFrom: {
			name: "Studiooo Team",
			email: "podpora@internetovyinstitut.cz"
		},
	},
}
