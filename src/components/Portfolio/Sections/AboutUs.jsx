import '../../../assets/styles/scss/Portfolio/AboutUSComponent.scss'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

const AboutUs = () => {
     return (
          <section className="about-us" id='aboutus'>
               <div className="container">
                    <div className="about-us-content">
                         <div className='about-us-title'>
                              <h1 className='title'>
                                   About us
                              </h1>
                              <p className='paragraph'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.
                              </p>
                         </div>
                         <div className='about-us-text'>
                              <p className='paragraph'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec tellus et metus varius tristique a sed enim. Maecenas sed dui eget leo finibus dictum. Suspendisse eu tincidunt justo. Etiam sollicitudin nisi non ante gravida malesuada. Curabitur convallis arcu ac diam porta feugiat. Praesent consectetur tincidunt vehicula. Etiam a dui sodales magna ornare ultricies eu eu diam.

                              </p>
                              <p className='paragraph'>
                                   Fusce laoreet lobortis eros nec fermentum. Quisque porttitor egestas risus, vel varius purus aliquet eu. Etiam ac placerat erat. Proin sit amet augue quis urna volutpat mollis. Fusce consectetur faucibus purus sit amet vehicula. Sed auctor efficitur consequat. Donec vitae sem a turpis imperdiet accumsan.
                              </p>
                         </div>
                         <div className='about-us-cards-selection'>
                              <div className='about-us-card'>
                                   <div className='about-us-image'>
                                        <img className='portrait' src={'https://pps.whatsapp.net/v/t61.24694-24/216438667_326642789370785_5346326481682587274_n.jpg?ccb=11-4&oh=01_AVyYh3Djkeo2xfiQfX8YJy9W5tfS_i6tb-y4uG_6Kqu3tQ&oe=62FEAE4D'} />
                                   </div>
                                   <div className='about-us-card-text'>
                                        <h1 className='hypper-text'>Mateus do HS</h1>
                                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.</p>
                                        <div className='about-us-dev-social'>
                                             <div className='about-us-social github'>
                                                  <AiFillGithub size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social linkedin'>
                                                  <FaLinkedin size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social instagram'>
                                                  <AiFillInstagram size={25} color="#fff" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='about-us-card'>
                                   <div className='about-us-image'>
                                        <img className='portrait' src={'https://img.freepik.com/fotos-gratis/homem-de-negocios-com-os-bracos-cruzados-e-sorrindo_1139-677.jpg?w=2000'} />
                                   </div>
                                   <div className='about-us-card-text'>
                                        <h1 className='hypper-text'>Gustavo da boca de fumo</h1>
                                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.</p>
                                        <div className='about-us-dev-social'>
                                             <div className='about-us-social github'>
                                                  <AiFillGithub size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social linkedin'>
                                                  <FaLinkedin size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social instagram'>
                                                  <AiFillInstagram size={25} color="#fff" />
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              <div className='about-us-card'>
                                   <div className='about-us-image'>
                                        <img className='portrait' src={'https://images.unsplash.com/photo-1659880342912-51f8e9682e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'} />
                                   </div>
                                   <div className='about-us-card-text'>
                                        <h1 className='hypper-text'>Name Surname</h1>
                                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis accumsan ultrices.</p>
                                        <div className='about-us-dev-social'>
                                             <div className='about-us-social github'>
                                                  <AiFillGithub size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social linkedin'>
                                                  <FaLinkedin size={25} color="#fff" />
                                             </div>
                                             <div className='about-us-social instagram'>
                                                  <AiFillInstagram size={25} color="#fff" />
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default AboutUs;