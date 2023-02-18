export const handleFullFilledTitle = (title: string) => {

  const regex = />-</g
  const found = title.match(regex)

  if (found) {
    return false
  }

  return title

}
