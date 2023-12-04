import jerseyIcon from './components/Assets/images/jersey.jpeg';
import joggersIcon from './components/Assets/images/joggers.jpeg';
import sandalIcon from './components/Assets/images/sandal.png';
import shirtIcon from './components/Assets/images/shirt.png';
import shortIcon from './components/Assets/images/shorts.jpeg';
import sneakerIcon from './components/Assets/images/sneaker.png';


class MyIcons {
    constructor(){
        this.jerseyIcon = jerseyIcon;
        this.joggersIcon = joggersIcon;
        this.sandalIcon = sandalIcon;
        this.shirtIcon = shirtIcon;
        this.shortIcon = shortIcon;
        this.sneakerIcon = sneakerIcon;
    }
    getJerseyIcon(){
        return this.jerseyIcon;
    }
    getJoggersIcon(){
        return this.joggersIcon;
    }
    getSandalIcon(){
        return this.sandalIcon;
    }
    getShirtIcon(){
        return this.shirtIcon;
    }
    getShortIcon(){
        return this.shirtIcon;
    }
    getSneakerIcon(){
        return this.sneakerIcon;
    }
}

const myIcons = new MyIcons();
export default myIcons;