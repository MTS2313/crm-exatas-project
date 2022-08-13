
import '../../../assets/styles/scss/CRMPages/CounterCards.scss'

const CounterCards = ({ data }) => {
     return (
          <div className="counterCards">
               <div className="crmContainer" style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '20px' }}>
                    <>{data.map((item, index) => {
                         return <h1 key={index}>
                              {item.mainTitle}
                         </h1>
                    })}</>
                    <div className="counterCardsSelection">
                         {
                              data.map(item => {
                                   return <>{
                                        item.datas.slice(0,4).map((item, index) => {
                                             return <div key={index} className="counterCard" style={{
                                                  'background': index === 0 ? 'rgba(42,127,250,0.05)' : index === 1 ? 'rgba(213,115,115,0.05)' : index === 2 ? 'rgba(115,213,125,0.05)' : 'rgba(30,30,30,0.05)'
                                             }}>
                                                  <p className="counterCardTitle" style={{ 'color': index === 0 ? 'rgb(42,127,250)' : index === 1 ? 'rgb(213,115,115)' : index === 2 ? 'rgb(115,213,125)' : 'rgb(30,30,30)' }}>
                                                       {item.counterTitle}
                                                  </p>
                                                  <h1 className="counterCardResult" style={{ 'color': index === 0 ? 'rgb(42,127,250)' : index === 1 ? 'rgb(213,115,115)' : index === 2 ? 'rgb(115,213,125)' : 'rgb(30,30,30)' }}>
                                                       {item.counterValue}
                                                  </h1>
                                             </div>
                                        })}</>
                              })
                         }
                    </div>
               </div>
          </div>
     );
}

export default CounterCards;