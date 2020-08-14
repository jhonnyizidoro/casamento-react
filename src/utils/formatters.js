export const formattedDate = timestamp => {
	const date = new Date(timestamp)
	const [day, month, year, hour, min] = [
		date.getDate(),
		date.getMonth() + 1,
		date.getFullYear(),
		date.getHours(),
		date.getMinutes(),
	]
	return `${day}/${month}/${year}, ${hour}:${min}`
}