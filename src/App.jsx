import RandomGif from './components/RandomGif';
import SearchGif from './components/SearchGif';

export default function App() {
  return (
    <div className='background min-h-screen w-full p-2 flex flex-col items-center'>
       <h1 className='bg-white w-full text-center text-3xl font-bold py-2 rounded-lg'>Get Gifs</h1>
       <RandomGif></RandomGif>
       <SearchGif></SearchGif>
    </div>
  );
}
