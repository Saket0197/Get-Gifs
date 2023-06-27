import { useState } from "react";
import useGenGif from "../hooks/useGenGif";

export default function SearchGif() {
    const {loading,gif,fetchData} = useGenGif('dog');
    const [tag,setTag] = useState('');

    return(
        <div className="w-[65%] flex flex-col items-center gap-4 my-2">
            <h1 className="w-full bg-orange-600 text-black text-center font-bold text-2xl p-2 rounded-md">A {tag} Gif</h1>
            <div className="w-full flex justify-center rounded-md max-h-[85%] border border-black">
                {loading ? <div className="spinner"></div> : <img src={gif} alt="" className="w-full h-full rounded-md" />}
            </div>
            <input type="text" value={tag} onChange={(event) => setTag(event.target.value)} className="w-full p-2 font-bold text-center text-2xl" />
            <button onClick={() => fetchData(tag)} className="py-2 px-4 text-xl text-center font-bold rounded-md bg-white w-[90%]">Generate Gif</button>
        </div>
    );
}