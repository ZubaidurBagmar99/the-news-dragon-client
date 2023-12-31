import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGofore, FaInstagram, FaTelegramPlane, FaTiktok, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGofore /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
          <ListGroup.Item> <FaTiktok/> Tiktok</ListGroup.Item>
          <ListGroup.Item><FaTelegramPlane/> Telegram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
