import bannerImage from '../../assets/picture/banner.jpg'

const BannerImg = () => {
    return (
        <div className='w-5xl mx-auto'>
            <div className='border border-white rounded-3xl p-4' style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
            
                <div className='rounded-3xl overflow-hidden'>
                <img className='rounded-3xl' src={bannerImage} alt="Banner pictures" />
                </div>

            
            </div>
        </div>
    );
};

export default BannerImg;