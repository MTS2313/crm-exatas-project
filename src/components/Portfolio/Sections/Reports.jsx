import { CRMReportsData } from '../../../assets/data/psdata.portfolioData';
import '../../../assets/styles/scss/Portfolio/ReportsComponents.scss'


const Reports = () => {
     return (
          <section className="reports">
               <div className="container">
                    <div className="reports-content">
                         <div className="reports-title">
                              <h1 className="title">
                                   What some companies say about us
                              </h1>
                              <p className="paragraph">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                              </p>
                         </div>
                         <div className='reports-cards-selection'>
                              {
                                   CRMReportsData.map((item, index) => {
                                        return (
                                             <div key={index} className='report-card'>
                                                  <div className='report-card-content'>
                                                       <div className='reports-card-logo' style={{ 'backgroundColor':item.logo.color }}>
                                                            <img src={item.logo.img} />
                                                       </div>
                                                       <p className='paragraph'>
                                                            {item.desc}
                                                       </p>
                                                       <h1 className='hypper-text'>
                                                            {item.name}
                                                       </h1>
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

export default Reports;