import './Banner.css'

export const Banner = () => {
    // JSX - Ele enentede o que é e faz um appende no DOM
    // Ou seja, não é HTML, é como o react lê e transforma em elementos no DOM
    // Parece HTML mas não é
    return (
        <header className="banner">
            <img src="/images/banner.jpg" alt="Janis Joplin"/>
        </header>
    )
}