import {Col, Row} from 'reactstrap'
import Partner from './Partner'
import { selectAllPartners } from './partnersSlice'
import { useSelector } from 'react-redux'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const PartnerList = () => {
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    const partners = useSelector(selectAllPartners)
    const renderedPartners = partners.map((partner)=>{
        return (
            <div key={partner.id} className="d-flex mt-5">
                <Partner partner={partner}/>
            </div>
        )
    })
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {renderedPartners}
            </Row>
        </Col>
    );
}

export default PartnerList