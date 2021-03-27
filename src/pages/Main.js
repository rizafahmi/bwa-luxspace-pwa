import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Browse from "../components/Browse.js";
import Arrived from "../components/Arrived.js";
import Clients from "../components/Clients.js";
import Modal from "../components/Modal.js";
import Footer from "../components/Footer.js";
import Offline from "../components/Offline.js";

function Main({ offlineStatus, handleShowModal, items, showModal, cart }) {
  return (
    <>
      {offlineStatus && <Offline />}
      <Header cart={cart} />
      <Hero handleShowModal={handleShowModal} />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <Footer />
      {showModal && <Modal handleShowModal={handleShowModal} />}
    </>
  );
}

export default Main;
