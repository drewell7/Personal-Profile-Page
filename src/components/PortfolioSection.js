import './Portfolio.css';

const PortfolioSection = () => {
    return (
        <div className='container-fluid portfolioSection'>
            <div className='row'>
                <div className='portfolioTitle'>
                    <h2>Portfolio Projects Coming Soon!</h2>
                </div>
            </div>
                <div className='pt-5 fluid'>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 1</h5>
                            <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 2</h5>
                            <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 3</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 4</h5>
                            <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;