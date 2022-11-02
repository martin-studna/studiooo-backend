import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const createCertificates = async () => {
	const workshops = await prisma.workshop.findMany()

	await Promise.all(workshops.map(async w => {
		await prisma.certificate.create({
			data: {
				workshopId: w.id,
				media: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.cz%2F&psig=AOvVaw3PKT2IiFc3fm8KoKbfs8Tv&ust=1621194034335000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICbqsa4zPACFQAAAAAdAAAAABAD',
				text: 'certifikát od google'
			}
		})
	}))


}

createCertificates()