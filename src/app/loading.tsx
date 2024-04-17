export default function Loading() {
  return(
<main className="h-screen">
<div className="flex flex-row gap-2 justify-center">
  <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
  <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
</div>
</main>
    )
}
