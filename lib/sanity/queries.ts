export const beersQuery = `*[_type == "beer"] | order(name asc) {
  _id,
  name,
  type,
  description,
  image,
  abv,
  ibu,
  slug
}`

export const beerBySlugQuery = `*[_type == "beer" && slug.current == $slug][0] {
  _id,
  name,
  type,
  description,
  image,
  abv,
  ibu,
  slug
}`

export const foundersQuery = `*[_type == "founder"] | order(name asc) {
  _id,
  name,
  photo,
  bio
}`

export const eventsQuery = `*[_type == "event"] | order(date desc) {
  _id,
  title,
  date,
  description,
  location,
  image
}`

export const pubsQuery = `*[_type == "pub"] | order(name asc) {
  _id,
  name,
  address,
  description,
  hours,
  images,
  slug
}`

export const pubBySlugQuery = `*[_type == "pub" && slug.current == $slug][0] {
  _id,
  name,
  address,
  description,
  hours,
  images,
  slug
}`

export const manifestoQuery = `*[_type == "manifesto"][0] {
  _id,
  content
}`

export const settingsQuery = `*[_type == "settings"][0] {
  _id,
  siteName,
  siteDescription,
  logo
}`

