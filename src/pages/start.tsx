import { Link } from "react-router"
import BackgroundImage from '../assets/background.jpg'

export default function Start() {

    return (
        <div className="static w-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="flex h-screen flex-col items-center justify-center ">
                 <h1 className="text-white text-2xl">GEOINT Australia</h1>
                <div className="rounded-sm border-2 border-solid border-slate-500 p-2 m-4 bg-slate-400 text-white">
                    <Link to="/">Click to enter</Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 m-2 p-1">
                <div className="text-slate-700 text-xs">Image credit: </div>
            </div>
        </div>
    )
}

// Add tool tip for image credit:
// https://unsplash.com/photos/photo-of-outer-space-Q1p7bh3SHj8 