import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dicas from '../pages/Dicas/Dicas'
import ListPage from '../pages/ListPage';


function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route  path="/dicas" component={Dicas}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas