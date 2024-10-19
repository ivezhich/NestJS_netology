import fs from 'fs'
import os from 'os'

const logger = (req: any, res: any, next: any) => {
	const now = Date.now()
	const { url, method } = req

	const data = `${now} ${method} ${url}`

	fs.appendFile("./logs/server.log", data + os.EOL, (err) => {
		if (err) throw err;
	})

	next()
};

export default logger;