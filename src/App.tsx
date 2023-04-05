import WebcamDemo from './components/WebcamDemo';
import CameraControls from "./components/CameraControls";
import {useState} from "react";
import './styles/main.scss';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="App">
            <div className="container">
                <WebcamDemo
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleShowModal={handleShowModal}
                    handleCloseModal={handleCloseModal}
                />
                <CameraControls handleShowModal={handleShowModal} />
            </div>
        </div>
    )
}
export default App;
