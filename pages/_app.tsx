import {AppProps} from "next/app";

// Styles
import '../styles/globalss.scss'

const MyApp: React.FC<AppProps> = ({Component, pageProps}: AppProps) => {

    return (
        <Component {...pageProps} />
    );
};

export default MyApp;
