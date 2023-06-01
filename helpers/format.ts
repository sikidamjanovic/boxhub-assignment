export const capitalizeReplaceDash = (word: string) => 
  word.replace(/-/g, ' ').replace(/(?: |\b)(\w)/g, function (word) {
    return word.toUpperCase()
  })