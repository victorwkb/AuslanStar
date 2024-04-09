import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { getWord } from '../lib/query';


const WordsList = async ({ query }: { query: string }) => {

  const word = await getWord(query);
  console.log(word);

  return (
    <div>WordsList</div>
  )
}

export default WordsList
