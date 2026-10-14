import { Link } from "react-router";

export default function Footer() {
    return (
        <div id="header" className="border-bottom-1 p-4 flex flex-row gap-4 bg-slate-500 text-white items-end">
            <Link to="/" className="text-sm underline underline-offset-4">About us</Link>
            <Link to="/statement" className="text-sm underline underline-offset-4">AI use statement</Link>
        </div>
    )
}