import { database } from './prismadb'

export const getWord = async (queried_word: string) => {
  const word = await database.Word.findFirst({
    where: {
      entry_in_english: queried_word,
    },
  })

  return word
}
