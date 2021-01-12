export const formattedDate = timestamp => {
	const date = new Date(timestamp.toDate ? timestamp.toDate() : timestamp)
	const [day, month, year, hour, min] = [
		`0${date.getDate()}`.slice(-2),
		date.getMonth() + 1,
		date.getFullYear(),
		`0${date.getHours()}`.slice(-2),
		`0${date.getMinutes()}`.slice(-2),
	]
	return `${day}/${month}/${year}, ${hour}:${min}`
}