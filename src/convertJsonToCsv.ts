const convertJsonToCsv = (e: Event) => {
  const pastedJson = (e.target as HTMLTextAreaElement).value
  console.log(pastedJson)
}

export default convertJsonToCsv
