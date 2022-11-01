
import './style/Configuration.scss'
import {useState} from 'react'
import Header from '../../../components/GlobalComponents/Header/Header'
import {Tab0, Tab1} from './Tabs'

const Configuration = () => {
    const [skuAba, setSkuAba] = useState(0)

    const toggleSkuAba = (i) => setSkuAba(i)
    return (
        <div className='container-configuration'>
        <Header PageName="Configuracoes" 
        hasReport={false}
        asAddButton={false} />
            <div className='configOptions'>
                <button onClick={() => { toggleSkuAba(0) }} className={`configOptionsButton ${skuAba == 0 && 'active'}`}>Geral</button>
                <button onClick={() => { toggleSkuAba(1) }} className={`configOptionsButton ${skuAba == 1 && 'active'}`}>Themes</button>
            </div>
            <div className='container-configuration--content'>
                {skuAba === 0 && <Tab0 />} 
                {skuAba === 1 && <Tab1 />}
            </div>
        </div>
    )
}

export default Configuration