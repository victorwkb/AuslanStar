import SearchWord from "./SearchWord";
import { Entry } from '@/app/models/entry';
import WordsList from "./WordsList";

const DictionaryPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {

  const query = searchParams?.query || '';
  

  return (
    <div>
      <h1>Dictionary</h1>
      <SearchWord />
      <WordsList query={query} />
    </div>
  )
}

export default DictionaryPage;
