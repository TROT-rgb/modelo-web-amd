import "../Components/CSS/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingScreen from "../Screens/Loading";
import HomeScreen from "../Screens/Home";
import SignUpScreen from "../Screens/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen";
import Admin from "../Screens/Admin";
import Profile from "../Screens/Profile";
import NewsAMD from "../Screens/NewsAMD";
import AdviceAMD from "../Screens/AdviceAMD";
import NewsCommunity from "../Screens/NewsCommunity";
import CompCsgo from "../Screens/CompCsgo";
import CompValorant from "../Screens/CompValorant";
import CompCod from "../Screens/CompCod";
import CompFortnite from "../Screens/CompFortnite";
import Streaming from "../Screens/Streaming";
import ApkDownload from "../Screens/ApkDownload";
import LoadingScreenUc from "../Screens/LoadingUc";

import { UserProvider } from "../Components/Context/UserContext";
import { FirebaseProvider } from "../Components/Context/FirebaseContext";
import UniversityChallenge from "../Screens/UniversityChallenge";

export default function App() {
    return (
        <FirebaseProvider>
            <UserProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Loading"
                            component={LoadingScreen} />
                        <Route path="/SignUpScreen"
                            component={SignUpScreen} />
                        <Route path="/LoginScreen"
                            component={LoginScreen} />
                        <Route path="/Profile"
                            component={Profile} />
                        <Route path="/Admin"
                            component={Admin} />
                        <Route path="/NewsAMD"
                            component={NewsAMD} />
                        <Route path="/AdviceAMD"
                            component={AdviceAMD} />
                        <Route path="/NewsCommunity"
                            component={NewsCommunity} />
                        <Route path="/CompCsgo"
                            component={CompCsgo} />
                        <Route path="/CompValorant"
                            component={CompValorant} />
                        <Route path="/CompCod"
                            component={CompCod} />
                        <Route path="/CompFortnite"
                            component={CompFortnite} />
                        <Route path="/Streaming"
                            component={Streaming} />
                        <Route path="/ApkDownload"
                            component={ApkDownload} />
                        <Route exact path="/universitychallenge"
                            component={UniversityChallenge} />
                        <Route exact path="/universitychallenge/loading"
                            component={LoadingScreenUc} />
                        <Route exact path="/"
                            component={HomeScreen} />
                    </Switch>
                </BrowserRouter>
            </UserProvider>
        </FirebaseProvider>
    );
}

