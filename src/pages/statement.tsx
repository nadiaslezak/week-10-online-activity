import Header from "./elements/header";
import Footer from "./elements/footer";

export default function Statement() {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Header />
      <div className="flex justify-center flex-grow">
        <div className="m-8 w-175">
          <h1 className="font-semibold text-xl pb-4">AI use statement</h1>
          <p>
            AI was used in this project to generate copywriting. The
            following prompts and AI models were used.
          </p>
          <Prompt
            prompt="Provide me with copy for a website for a company named GEOINT Australia, that provides earth observation for geospatial intelligence."
            model="Claude, Sonnet 5.5"
          />
          <Prompt 
            prompt="Can you update this README.md file to ensure it is easy to read and understand. This is for a university project. I have created a website that needs to be accessed via github."
            model="Claude, Sonnet 5.5"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface PromptProps {
  prompt: string;
  model: string;
}

function Prompt({ prompt, model }: PromptProps) {
  return (
    <div className="my-4">
      <div className="bg-slate-100 p-4 flex flex-col gap-2">
        <p>{prompt}</p>
        <p className="text-slate-500">{model}</p>
      </div>
    </div>
  );
}
