import {Col, Row} from 'reactstrap'
import CampsiteCard from './CampsiteCard'
import { selectAllCampsites } from './camspitesSlice';

const CampsitesList = () => {

    const campsites = selectAllCampsites();
    const renderedCampsites = campsites.map((campsite) => {
        return (
            <Col md='5' className='m-4 campsites-col' key={campsite.id}>
                <CampsiteCard campsite={campsite}/>
            </Col>
        )
    })

    return (
        <Row className='campsites-row'>
            {renderedCampsites}
        </Row>
    )
}

export default CampsitesList