import { CRMPriceData } from '../../../assets/data/psdata.portfolioData';
import '../../../assets/styles/scss/Portfolio/PricingComponent.scss'
import FilledButton from '../FilledButtonComponent';

const Pricing = () => {
     return (
          <section className="pricing" id={'prices'}>
               <div className='container'>
                    <div className='pricing-content'>
                         <div className='pricing-content-text'>
                              <h1 className='title'>
                                   Our prices
                              </h1>
                              <p className='paragraph'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                              </p>
                         </div>
                         <div className='prices-cards-selection' >
                              {
                                   CRMPriceData.map((item, index) => {
                                        return (
                                             <div key={index} className='price-card'>
                                                  <div className='price-card-content'>
                                                       <div className='price-card-logo' style={{ 'backgroundColor': item.color }} />
                                                       <h1 className='hypper-text'>
                                                            {item.name}
                                                       </h1>
                                                       <p className='paragraph'>
                                                            {item.desc}
                                                       </p>
                                                       <div className='price-value-text'>
                                                            <h1 className='price-text' style={{
                                                                 'color': item.recomended ? '#212832' : '', 'fontWeight': item.recomended ? 'bold' : ''
                                                            }}>
                                                                 {item.price}
                                                            </h1>
                                                            <FilledButton backgroundColor={item.recomended ? '' : '#fff'} text={'Get it'} fontColor={item.recomended ? '#fff' : '#2A7FFA'} />
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Pricing;