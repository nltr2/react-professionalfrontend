import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Aboutus } from '../aboutus';
import { ContactUs } from '../contactus';
import { ConnectedCrmSystem } from '../crmsystem';
import { Footer } from "../footer";
import { Header } from "../header";
import { Home } from '../home';
import { Signin } from '../signin';

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Switch>
                    <Route path="/" exact><Home title="AWESOME, CUSTOMIZABLE, REACT" /></Route>

                    <Route path="/about-us">
                        <Aboutus />
                    </Route>

                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>

                    <Route pat="/crm-system">
                        <ConnectedCrmSystem />
                    </Route>

                    <Route path="/sign-in">
                        <Signin />
                    </Route>
                </Switch>

                < Footer />
            </div>
        </BrowserRouter>
    );
};

export default Layout;
