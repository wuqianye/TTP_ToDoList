import { CCard, CCardBody, CContainer, CCol, CCardTitle, CCardText, CCardSubtitle } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'


function Task() {
  return (
      <CContainer fluid>
        <CCard>
          <CCardBody>
            <CCardTitle>
              Task
            </CCardTitle>
            <CCardText>
              Description
            </CCardText>
          </CCardBody>
        </CCard>
    </CContainer>

  );
}

export default Task;
