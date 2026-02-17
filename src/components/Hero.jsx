export default function Hero({nom}){
    return (
        <section className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue sur notre tuto Framer Motion {nom} !</h1>
        </section>
    )
}