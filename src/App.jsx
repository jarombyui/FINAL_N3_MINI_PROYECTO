import { Provider, useDispatch, useSelector } from "react-redux";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import modalSlice from "./Store/modalSlice";
import store from "./Store/store";
import Drawer from "./components/Drawer/Drawew";
import Footer from "./components/Footer/Footer";
import { ModalPortal } from "./components/Modal/ModalPortal";
// import { ModalPortal } from "./components/Modal/ModalPortal";

function App() {
  
  return (
    <Provider store={store}>
      <div className=" xl:container xl:mx-auto md:px-8 px-5">
        <ModalComponent />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

// function ModalComponent() {
//   const modalState = useSelector((state) => state.modal.showModal);
//   return <Fragment>{modalState && <Modal />}</Fragment>;
// }

function ModalComponent() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.showModal);
  const { closeModal } = modalSlice.actions;
  return <ModalPortal onClose={()=>dispatch(closeModal())} isOpen={modalState}>
  <Drawer/>
  </ModalPortal>;
}


export default App;
