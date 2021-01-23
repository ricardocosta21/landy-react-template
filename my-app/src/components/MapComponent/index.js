import { withTranslation } from "react-i18next";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Fade } from "react-reveal";
import { Row, Col } from "antd";

import * as S from './styles';

const containerStyle = {
  width: "1000px",
  height: "400px",
};

const center = {
  lat: 37.255,
  lng: -8.539,
};

const MapComponent = ({title, content, button, t }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAzE2CnOLxkA6ZqA5ttw_YVTSgTmbqXuO0",
  });

  return isLoaded ? (
    <S.MapComponent>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          {/* <S.ContentWrapper> */}
            <Col lg={24} md={24} sm={5} xs={24}>
            <h6>{t(title)}</h6>

              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: 37.255, lng: -8.539 }}
                zoom={10}
              >
                <Marker position={{ lat: 37.255, lng: -8.539 }} />
                <></>
              </GoogleMap>


            </Col>
          {/* </S.ContentWrapper> */}
        </Fade>
      </Row>
    </S.MapComponent>
  ) : (
    <></>
  );
};

export default withTranslation()(MapComponent);
