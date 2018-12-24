let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012])
let data = new Map()

data.set("title", "undestanding")
data.set("format", "ebook")

for (let entry of colors.entries()) {
  console.log(entry)
}
for (let entry of tracking.entries()) {
  console.log(entry)
}
for (let entry of data.entries()) {
  console.log(entry)
}