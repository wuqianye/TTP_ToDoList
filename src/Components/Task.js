import { CCard, CCardBody, CContainer, CCol, CCardTitle, CCardText, CCardSubtitle } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'


function Task(props) {
  return (
      <CContainer fluid>
        <CCard>
          <CCardBody>
            <CCardTitle>
             {props.title}
            </CCardTitle>
            <CCardText>
              {props.desc}
            </CCardText>
          </CCardBody>
        </CCard>
    </CContainer>
  );
}

export default Task;
