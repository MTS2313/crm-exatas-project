import { useState } from 'react';
import { MdOutlineEast, MdOutlineWest } from 'react-icons/md';
import { CRMImagesData } from '../../../assets/data/psdata.portfolioData';
import '../styles/CRMImagesComponents.scss'


const CRMImages = () => {

     return (
          <section className="crm-images">
               <div className="container">
                    <div className="crm-images-content">
                         <div className='crm-images-title'>
                              <h1 className="title">
                                   Some CRM Images
                              </h1>
                              <p className='paragraph'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                              </p>
                         </div>
                         <div className='images-content'>
                              <div className='images-selection'>
                                   <div className='images'>
                                        {CRMImagesData.map((item, index) => {
                                             return <img key={index} className='crm-img' src={item.img} />
                                        })}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default CRMImages;