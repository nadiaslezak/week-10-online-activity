import Header from "./elements/header";
import Footer from "./elements/footer";

export default function Statement() {
    return (
        <div className="flex min-h-screen w-screen flex-col">
            <Header/>
            <div className="flex justify-center flex-grow">
                <div className="m-8 w-175">
                    <h1 className="font-semibold text-xl pb-4">AI use statement</h1>
                    <p>AI was used in this project to generate the images and animations. The following promps and AI models were used.</p>
                    <Prompt prompt="Prompt text" model="Model name"/>
                </div>
            </div>
           <Footer/> 
        </div>
        
    )
}

interface PromptProps {
    prompt: string;
    model: string
}

function Prompt({ prompt, model }: PromptProps) {
    return (
        <div className="my-4">
            <div className="bg-slate-100 p-4 flex flex-col gap-2">
                <p>{prompt}</p>
                <p className="text-slate-500">{model}</p>
            </div>
        </div>
    )
}