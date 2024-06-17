import './Area.css'
import areas from '../../json/areas.json'
import ReactMarkdown from 'react-markdown'
import NotFound from '../NotFound'
import { Route, Routes, useParams } from 'react-router-dom'
import Default from '../../components/Default'
import AreaModel from '../../components/AreaModel'

export default function Area(){
    const parametros = useParams()
    const area = areas.find((area) =>{
        return area.id === Number(parametros.id)
    })

    if(!area){
        return <NotFound />
    }

    return(
        <Routes>
                <Route path="*" element={<Default />}>
                <Route index element={
                    <AreaModel index titulo={area.titulo}>
                        <div className='area-markdown-container'>
                            <ReactMarkdown>
                                {area.texto}
                            </ReactMarkdown>
                        </div>
                        <div className='ancora__div'>
                        <a href='#inicio' className='ancora__inicio-area'><div><i className="fa-solid fa-angle-up"></i></div> 
                        Voltar para o início</a>
                        </div>
                    </AreaModel>
                }/>
                </Route>
        </Routes>
    )
}