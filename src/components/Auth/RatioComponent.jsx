import './styles/RatioComponent.scss'

const Ratio = ({ text, name }) => {
     return (
          <label className='ratio'>
               <input type={'radio'} name={name} />
               {text}
          </label>
     );
}

export default Ratio;