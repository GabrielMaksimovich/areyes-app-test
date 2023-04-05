import WebcamDemo from './components/WebcamDemo';
import CameraControls from "./components/CameraControls";
import {useMemo, useState} from "react";
import './styles/main.scss';
import useWindowSize from "./hooks/windowResizeHook";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const size = useWindowSize();
    const isLandscape = size.height <= size.width;
    const ratio = isLandscape ? size.width / size.height : size.height / size.width;
    const maxWidth = 500;

    const controlsHeight = useMemo(() => {
        return size.height * 0.2;
    }, [size]);

    const cameraHeight = useMemo(() => {
        return size.height * 0.8;
    }, [size]);

    const cameraWidth = useMemo(() => {
        return Math.min(size.width, maxWidth);
    }, [size]);

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
                    cameraHeight={cameraHeight}
                    ratio={ratio}
                    cameraWidth={cameraWidth}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleShowModal={handleShowModal}
                    handleCloseModal={handleCloseModal}
                />
                <CameraControls controlsHeight={controlsHeight} handleShowModal={handleShowModal} />
            </div>
        </div>
    )
}
export default App;
