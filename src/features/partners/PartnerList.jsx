import {Col} from 'reactstrap'
import Partner from './Partner'
import { selectAllPartners } from './partnersSlice'
import { useSelector } from 'react-redux'

const PartnerList = () => {
    const partners = useSelector(selectAllPartners)
    const renderedPartners = partners.map((partner)=>{
        return (
            <div key={partner.id} className="d-flex mt-5">
                <Partner partner={partner}/>
            </div>
        )
    })
    return (
        <Col className="mt-4">
            {renderedPartners}
        </Col>
    )
}

export default PartnerList