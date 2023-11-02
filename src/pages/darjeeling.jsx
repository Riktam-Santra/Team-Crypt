import hill from './../assets/img/hill-black.svg'
import './../style/darjeeling/index.css'
import wather from './../assets/img/rainy.png'
export default function Darjeeling() {
    return (
        <div className='container-fluid'>
            {/* This card For Wather */}
            <div class="card">
                <div class="card-body">
                    <div className='card-icon'>
                        <img src={wather} />
                    </div>
                    <div className='card-text'>
                        <h5 class="card-title">35 c</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Rainy</h6>
                    </div>
                </div>
            </div>
            {/* <div className='hero-group'> */}
            <div className='main-text'>
                <h2>DARJEELING</h2>
            </div>
            <div className='main-img'>
                <img src={hill} className='hill-img' />
            </div>
            {/* </div> */}

        </div>
    )
}

