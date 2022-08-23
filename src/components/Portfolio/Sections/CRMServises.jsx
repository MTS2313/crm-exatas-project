import { CRMServicesCardData } from '../../../assets/data/psdata.portfolioData';
import '../styles/CRMServicesComponents.scss'

const CRMServices = () => {
     return (
          <section className="crm-services" id={'about'}>
               <div className="container">
                    <div className="crm-services-content">
                         <div className='crm-services-title'>
                              <h1 className="title">
                                   Our CRM Services
                              </h1>
                              <p className='paragraph'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                              </p>
                         </div>
                         <div className="cards-selection">
                              {
                                   CRMServicesCardData.map((item, index) => {
                                        return (
                                             <div key={index} className='card'>
                                                  <div className='card-avatar' style={{ 'backgroundColor': item.primaryColor }}>
                                                       {item.icon}
                                                  </div>
                                                  <div className="card-text">
                                                       <p className='card-title'>{item.title}</p>
                                                       <p className="card-desc">{item.desc}</p>
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

export default CRMServices;