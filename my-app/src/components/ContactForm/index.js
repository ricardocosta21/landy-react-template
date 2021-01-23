import React, { useState, Fragment } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import loadable from "@loadable/component";
import { withTranslation } from "react-i18next";

import useForm from "./useForm";
import validate from "./validationRules";
import * as S from "./styles";

const Block = loadable(() => import("../Block"));
const Input = loadable(() => import("../../common/Input"));
const Button = loadable(() => import("../../common/Button"));
const TextArea = loadable(() => import("../../common/TextArea"));

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const [inputFields, setInputFields] = useState([{ fullName: "" }]);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].fullName = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ fullName: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                {inputFields.map((inputField, index) => (
                  <Fragment key={`${inputField}~${index}`}>
                    <div className="form-group col-sm-6">
                      <Input
                        type="text"
                        name="name"
                        id="Name"
                        placeholder="Primeiro e Ultimo nome"
                        value={values.name || ""}
                        onChange={handleChange}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                      <ValidationType type="name" />
                    </div>

                    <div className="form-group col-sm-2">
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleRemoveFields(index)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleAddFields()}
                      >
                        +
                      </button>
                    </div>
                  </Fragment>
                ))}

                {/* <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Primeiro e Ultimo nome"
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type="name" /> */}
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="Email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Deixe uma mensagem bonita"
                  value={values.message || ""}
                  name="message"
                  id="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("Submit")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
