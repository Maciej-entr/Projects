function Hero({searchTerm, setSearchTerm}) {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Made with React</h1>
                <p>Portfolio Project</p>
            </div>
            <div className="hero-search">
                <input
                    type="text"
                    placeholder="Search posts"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Hero;