import '../../../assets/styles/scss/Portfolio/IntroComponents.scss'
import FilledButton from '../FilledButtonComponent';

const PortfolioIntro = () => {
     return (
          <section className="intro-body" id='home'>
               <div className="container">
                    <div className='intro-content'>
                         <p className={'customers-spam'}>
                              +10000 customers around the world!
                         </p>
                         <h1 className='title'>
                              Ready to manage your business.
                         </h1>
                         <p className='paragraph' style={{ 'color': 'rgba(255,255,255,0.8)' }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                         </p>
                         <a href='#about'><FilledButton text={'Now More'} fontColor={'#2A7FFA'} backgroundColor={'white'} /></a>
                    </div>
               </div>
          </section>
     );
}

export default PortfolioIntro;