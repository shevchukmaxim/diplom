import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Фамилия</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="Фамилия"
                    value="Sierra"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Имя</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Имя"
                    value="Brooks"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="12" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="sierra@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Адрес</label>
                <FormInput
                  id="feAddress"
                  placeholder="Адрес"
                  value="1234 Main St."
                  onChange={() => {}}
                />
              </FormGroup>
              <Button theme="accent">Обновить профиль</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
